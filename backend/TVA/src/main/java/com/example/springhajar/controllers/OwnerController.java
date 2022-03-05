package com.example.springhajar.controllers;

import com.example.springhajar.Model.Owner;
import com.example.springhajar.repositories.owner.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("owners")
public class OwnerController {
    @Autowired
    OwnerRepository ownerRepository;

    @PostMapping("/save")
    public void save(@RequestBody Owner owner){
        ownerRepository.save(owner);
    }


    // @CrossOrigin(origins = "http://192.168.1.154:3000")
    @GetMapping("/all")
    public List<Owner> load(){
        return ownerRepository.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id){
        Owner o = ownerRepository.trouverById(id);
       ownerRepository.delete(o);
    }

    @GetMapping("/count")
    public Map<String, Integer> count (){
        Map<String, Integer> map = new HashMap<>();
        for(Owner o : ownerRepository.findAll()){
            map.put(o.getNom(), o.getVehicules().size());
        }
        return map;
    }


}
