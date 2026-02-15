package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JobExecuteRequest {

    @JsonProperty("jobExecutionId")
    private String jobExecutionId;

    @JsonProperty("jobPayloadSchemaInstance")
    private Map<String, JobPayloadVariable> jobPayloadSchemaInstance;
}
