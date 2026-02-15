package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

/**
 * Response from GET /job/{jobExecutionId}/results.
 *
 * Actual shape:
 * {
 *   "jobExecutionId": "...",
 *   "status": "COMPLETED",
 *   "results": {
 *     "summary": "...",
 *     "outputFiles": ["..."],
 *     "data": {
 *       "company_product_name": "...",
 *       "match_name": "...",
 *       "ratings": "...",
 *       "company_description": "...",
 *       "compliance_details": "..."
 *     }
 *   }
 * }
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class JobResultsResponse {

    @JsonProperty("jobExecutionId")
    private String jobExecutionId;

    @JsonProperty("status")
    private String status;

    @JsonProperty("results")
    private Results results;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Results {
        @JsonProperty("summary")
        private String summary;

        @JsonProperty("outputFiles")
        private List<String> outputFiles;

        @JsonProperty("data")
        private ResultData data;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class ResultData {
        @JsonProperty("company_product_name")
        private String companyProductName;

        @JsonProperty("match_name")
        private String matchName;

        @JsonProperty("ratings")
        private String ratings;

        @JsonProperty("company_description")
        private String companyDescription;

        @JsonProperty("compliance_details")
        private String complianceDetails;
    }
}
