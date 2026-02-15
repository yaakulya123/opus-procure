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
    private String sector;
    private String equipmentType;
    private String priorityCountries;
    private String budgetRequirements;
    private String compliance;
}
