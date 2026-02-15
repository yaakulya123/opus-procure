package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FormRequest {
    private String materialName;
    private String sector;
    private Integer budgetMin;
    private Integer budgetMax;
    private String country;
    private String aiPrompt;
}
