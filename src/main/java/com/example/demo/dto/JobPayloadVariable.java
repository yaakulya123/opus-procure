package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class JobPayloadVariable {

    @JsonProperty("value")
    private Object value;

    @JsonProperty("type")
    private String type; // "str", "float", "int", etc.

    @JsonProperty("displayName")
    private String displayName;
}
