package com.example.tashilatTVA.controllers;

import com.example.tashilatTVA.models.ClassFlight;
import com.example.tashilatTVA.repository.ClassFlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("classes")
public class ClassFlightController {
    @Autowired
    ClassFlightRepository classFlightRepository;
    @GetMapping("/test")
    public List<ClassFlight> getall(){
        return classFlightRepository.findAll();
    }
    @PostMapping("/save")
    public void saveClass(@RequestBody ClassFlight classe){
         classFlightRepository.save(classe);
    }
}
