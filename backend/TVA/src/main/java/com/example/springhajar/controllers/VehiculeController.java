package com.example.springhajar.controllers;

import com.example.springhajar.Model.Vehicule;
import com.example.springhajar.repositories.owner.OwnerRepository;
import com.example.springhajar.repositories.vehicule.VehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("vehicules")
public class VehiculeController {
    @Autowired
    private VehiculeRepository vehiculeRepository;

    @Autowired
    private OwnerRepository ownerRepository;

    @GetMapping("/updateBill/{matricule}/{dateUpdate}")
    public int updateBillState(@PathVariable(required = true) String matricule,
                                @PathVariable(required = true) String dateUpdate){
        try{
            System.out.println(matricule+" "+dateUpdate);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            Date date = sdf.parse(dateUpdate);
            int updatedVehicule = vehiculeRepository.updateVehicule(date, matricule);
            return updatedVehicule;
            //System.out.println(vehicule.toString());
        }catch (Exception e){
            System.out.println(e.getMessage());
            return -1;
        }


    }

    @PostMapping("/save")
    public void save(@RequestBody Vehicule vehicule){
        System.out.println(vehicule);
        vehicule.setOwner(ownerRepository.trouverById(vehicule.getOwner().getId()));
        vehiculeRepository.save(vehicule);
    }

    @GetMapping("/all")
    public List<Vehicule> findAll(){
        for (Vehicule v:vehiculeRepository.findAll()
        ) {
            System.out.println("la vehicule: "+v.getNom()
                    +" proprietaire des vehicules ->" +v.getOwner().getNom());

        }
        return vehiculeRepository.findAll();
    }

    @DeleteMapping(value = "/delete/{id}")
    public void delete(@PathVariable(required = true) String matricule) {
        System.out.println("id = "+matricule);
        Vehicule vehicule = vehiculeRepository.findVehiculeByMatricule(matricule);
        vehiculeRepository.delete(vehicule);
    }
    @GetMapping("/vehiculeByMatricule/{matricule}")
    public Vehicule findVehiculeByMatricule(@PathVariable(required = true) String matricule){
        System.out.println("It is working soulaymane!");
        return vehiculeRepository.findVehiculeByMatricule(matricule);
    }

    /*@GetMapping("/mycounter")
    public long vehiculeCounter(){
        return vehiculeRepository.vehiculeCounter();
    }*/


    @GetMapping(value = "/counting")
    public Map<String, Long> countUsersByRole() {
        Map<String, Long> map = new HashMap<>();
        for(Object[] obj : vehiculeRepository.countingVehiculesByFactureState()){
            map.put(String.valueOf(obj[1]), (Long) obj[0] );
        }
        return map;
    }
}
