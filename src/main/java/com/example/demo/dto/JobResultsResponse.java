package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/** Response from GET /job/{jobExecutionId}/results. */
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class JobResultsResponse {

    @JsonProperty("data")
    private List<VendorResultItem> data;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class VendorResultItem {
        @JsonProperty("vendor_name")
        private String vendorName;

        @JsonProperty("compliance_score")
        private Double complianceScore;

        @JsonProperty("budget_fit_score")
        private Double budgetFitScore;

        @JsonProperty("overall_score")
        private Double overallScore;

        @JsonProperty("compliance_certifications")
        private List<String> complianceCertifications;

        @JsonProperty("proposed_budget")
        private Integer proposedBudget;

        @JsonProperty("location")
        private String location;

        @JsonProperty("years_in_business")
        private Integer yearsInBusiness;

        @JsonProperty("industry")
        private String industry;
    }
}
