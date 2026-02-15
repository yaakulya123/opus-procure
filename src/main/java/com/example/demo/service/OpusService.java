package com.example.demo.service;

import com.example.demo.dto.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class OpusService {

    private static final String INITIATE_PATH = "/job/initiate";
    private static final String EXECUTE_PATH = "/job/execute";
    private static final String RESULTS_PATH_TEMPLATE = "/job/%s/results";

    private final RestTemplate restTemplate;

    @Value("${opus.base-url}")
    private String baseUrl;

    @Value("${secret_key_opus}")
    private String serviceKey;

    @Value("${process_email_id}")
    private String processEmailId;

    @Value("${process_search_id}")
    private String processSearchId;

    public OpusService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    /**
     * Form-request flow: initiate search workflow, execute with form payload, then fetch job results.
     * Payload keys: sector, equipment_type, priority_countries, budget_requirements, compliance.
     * Results are fetched from GET /job/{jobExecutionId}/results and returned as SearchResponse.
     */
    public SearchResponse submitFormRequest(FormRequest form) {
        String jobId = initiateJob(processSearchId, "Form Request", "Processing procurement form request");
        if (jobId == null) {
            throw new RuntimeException("Failed to initiate Opus job");
        }
        executeJob(jobId, buildFormRequestPayload(form));
        return fetchJobResults(jobId);
    }

    /**
     * Write-email flow: initiate email workflow, then execute with email payload.
     * Payload keys: recipient_email_address_list, workflow_input_bilrvm4oa, workflow_input_smbbm3hf4.
     */
    public Object submitWriteEmail(EmailRequest email) {
        String jobId = initiateJob(processEmailId, "Write Email", "Sending email via workflow");
        if (jobId == null) {
            throw new RuntimeException("Failed to initiate Opus job");
        }
        return executeJob(jobId, buildWriteEmailPayload(email));
    }

    private String initiateJob(String workflowId, String title, String description) {
        String url = baseUrl + INITIATE_PATH;
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("x-service-key", serviceKey);

        JobInitiateRequest body = JobInitiateRequest.builder()
                .workflowId(workflowId)
                .title(title)
                .description(description)
                .build();

        ResponseEntity<JobInitiateResponse> response = restTemplate.exchange(
                url,
                HttpMethod.POST,
                new HttpEntity<>(body, headers),
                JobInitiateResponse.class
        );

        if (response.getBody() == null) {
            return null;
        }
        return response.getBody().getJobIdForExecute();
    }

    /**
     * Form-request workflow. jobPayloadSchemaInstance must match exactly:
     * sector, equipment_type, priority_countries, budget_requirements, compliance
     * — type "str", displayName as below; value from FormRequest.
     */
    private Map<String, JobPayloadVariable> buildFormRequestPayload(FormRequest form) {
        Map<String, JobPayloadVariable> payload = new LinkedHashMap<>();
        payload.put("sector", variable(form.getSector(), "str", "sector"));
        payload.put("equipment_type", variable(form.getEquipmentType(), "str", "equipment type"));
        payload.put("priority_countries", variable(form.getPriorityCountries(), "str", "priority countries"));
        payload.put("budget_requirements", variable(form.getBudgetRequirements(), "str", "budget requirements"));
        payload.put("compliance", variable(form.getCompliance(), "str", "compliance"));
        return payload;
    }

    private static JobPayloadVariable variable(String value, String type, String displayName) {
        return JobPayloadVariable.builder()
                .value(value != null ? value : "")
                .type(type)
                .displayName(displayName)
                .build();
    }

    /**
     * Write-email workflow. jobPayloadSchemaInstance must match exactly:
     * recipient_email_address_list, workflow_input_bilrvm4oa, workflow_input_smbbm3hf4
     * — type "str", displayName as below; value from EmailRequest.
     */
    private Map<String, JobPayloadVariable> buildWriteEmailPayload(EmailRequest email) {
        Map<String, JobPayloadVariable> payload = new LinkedHashMap<>();
        payload.put("recipient_email_address_list", variable(email.getRecipientEmailAddressList(), "str", "Recipient Email Address"));
        payload.put("workflow_input_bilrvm4oa", variable(email.getInstructions(), "str", "Instructions"));
        payload.put("workflow_input_smbbm3hf4", variable(email.getPastTemplateStructure(), "str", "Past template structure"));
        return payload;
    }

    private Object executeJob(String jobExecutionId, Map<String, JobPayloadVariable> jobPayloadSchemaInstance) {
        String url = baseUrl + EXECUTE_PATH;
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("x-service-key", serviceKey);

        JobExecuteRequest body = JobExecuteRequest.builder()
                .jobExecutionId(jobExecutionId)
                .jobPayloadSchemaInstance(jobPayloadSchemaInstance)
                .build();

        ResponseEntity<Map<String, Object>> response = restTemplate.exchange(
                url,
                HttpMethod.POST,
                new HttpEntity<>(body, headers),
                new ParameterizedTypeReference<Map<String, Object>>() {}
        );

        Map<String, Object> responseBody = response.getBody();
        if (responseBody == null || responseBody.isEmpty()) {
            return Map.of("jobExecutionId", jobExecutionId, "status", "executed");
        }
        return responseBody;
    }

    /**
     * GET https://operator.opus.com/job/{jobExecutionId}/results
     *
     * Response shape:
     * { jobExecutionId, status, results: { summary, outputFiles, data: {
     *     company_product_name, match_name, ratings, company_description, compliance_details
     * }}}
     */
    private SearchResponse fetchJobResults(String jobExecutionId) {
        String url = baseUrl + String.format(RESULTS_PATH_TEMPLATE, jobExecutionId);
        HttpHeaders headers = new HttpHeaders();
        headers.set("x-service-key", serviceKey);

        ResponseEntity<JobResultsResponse> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                new HttpEntity<>(headers),
                JobResultsResponse.class
        );

        JobResultsResponse body = response.getBody();
        if (body == null || body.getResults() == null || body.getResults().getData() == null) {
            return new SearchResponse(Collections.emptyList(), null);
        }

        JobResultsResponse.ResultData data = body.getResults().getData();
        String summary = body.getResults().getSummary();

        SearchResponse.VendorEntry entry = new SearchResponse.VendorEntry(
                data.getCompanyProductName(),
                data.getMatchName(),
                data.getRatings(),
                data.getCompanyDescription(),
                data.getComplianceDetails()
        );

        List<SearchResponse.VendorEntry> vendors = new ArrayList<>();
        vendors.add(entry);

        return new SearchResponse(vendors, summary);
    }
}
