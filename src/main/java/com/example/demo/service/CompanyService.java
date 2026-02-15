package com.example.demo.service;

import com.example.demo.model.CompanyData;
import com.example.demo.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository userRepository;

    public List<CompanyData> getAllUsers() {
        return userRepository.findAll();
    }
}
