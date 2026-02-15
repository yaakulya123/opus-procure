package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmailRequest {
    /** Recipient email address(es). Maps to recipient_email_address_list. */
    private String recipientEmailAddressList;
    /** Instructions. Maps to workflow_input_bilrvm4oa. */
    private String instructions;
    /** Past template structure. Maps to workflow_input_smbbm3hf4. */
    private String pastTemplateStructure;
}
