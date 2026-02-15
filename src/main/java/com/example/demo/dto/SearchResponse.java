package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SearchResponse {

    /** Ranked list of the top x most relevant vendors with full details. */
    private List<VendorEntry> topVendorList;

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class VendorEntry {
        private String vendorId;
        private String vendorName;
        private Double complianceScore;
        private Double budgetFitScore;
        private Double overallScore;
        private List<String> complianceCertifications;
        private Integer proposedBudget;
        private String location;
        private OtherDetails otherDetails;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class OtherDetails {
        private Integer yearsInBusiness;
        private String industry;
    }
}
