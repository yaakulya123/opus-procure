package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class JobInitiateResponse {

    @JsonProperty("id")
    private Integer id;

    @JsonProperty("jobExecutionId")
    private String jobExecutionId;

    /** Returns the job ID for use in execute; supports both id and jobExecutionId response shapes. */
    public String getJobIdForExecute() {
        if (jobExecutionId != null && !jobExecutionId.isEmpty()) {
            return jobExecutionId;
        }
        return id != null ? String.valueOf(id) : null;
    }
}
