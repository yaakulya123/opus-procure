package com.example.demo.controller;

import com.example.demo.dto.FormRequest;
import com.example.demo.model.CompanyData;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ProcurementController {

    @GetMapping
    public ResponseEntity<CompanyData> returnCompany(){
        return ResponseEntity.ok(null);
    }

    @PostMapping("/form-request")
    public ResponseEntity<CompanyData> searchCompany(@RequestBody FormRequest request) {
        // send form request to Opus API
        // parse the result here
        // save the result to DB
        // send back response
        return ResponseEntity.ok(null);
    }

    @PostMapping("/write-email")
    public ResponseEntity<CompanyData> writeEmail(@RequestBody FormRequest request) {
        // send an email request to Opus API
        // send back OK response
        // update status of the company from sent to ongoing
        return ResponseEntity.ok(null);
    }


}
