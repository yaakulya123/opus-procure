package com.example.demo.controller;

import com.example.demo.dto.EmailRequest;
import com.example.demo.dto.FormRequest;
import com.example.demo.dto.SearchResponse;
import com.example.demo.model.CompanyData;
import com.example.demo.service.OpusService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ProcurementController {

    private final OpusService opusService;

    public ProcurementController(OpusService opusService) {
        this.opusService = opusService;
    }

    @GetMapping
    public ResponseEntity<CompanyData> returnCompany(){
        return ResponseEntity.ok(null);
    }

    @PostMapping("/form-request")
    public ResponseEntity<SearchResponse> searchCompany(@RequestBody FormRequest request) {
        // Initiate Opus search job → execute with form payload → GET job results → return vendor list
        SearchResponse result = opusService.submitFormRequest(request);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/write-email")
    public ResponseEntity<?> writeEmail(@RequestBody EmailRequest request) {
        Object result = opusService.submitWriteEmail(request);
        return ResponseEntity.ok(result);
    }


}
