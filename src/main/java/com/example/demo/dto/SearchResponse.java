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

    /** Vendor results from AI search. */
    private List<VendorEntry> topVendorList;

    /** Summary from the Opus API results. */
    private String summary;

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class VendorEntry {
        private String companyProductName;
        private String matchName;
        private String ratings;
        private String companyDescription;
        private String complianceDetails;
    }
}
