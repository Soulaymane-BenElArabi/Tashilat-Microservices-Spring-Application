package com.tashilat.ee.Controller;

import com.tashilat.ee.Repository.FactureEauRepository;
import com.tashilat.ee.Repository.FactureElectreciteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class FactureElectreciteController {
    @Autowired
    private FactureElectreciteRepository factureElectreciteRepository;
    @GetMapping("/insert/{refElectric}/{idHome}")
    public void insert (@PathVariable String refElectric, @PathVariable String idHome){
        factureElectreciteRepository.insert(refElectric,idHome);
    }
    @GetMapping("/updaterefEau/{refElectrecitenew}/{idHome/{refElectrecite}}")
    public void updaterefEau(@PathVariable String refElectrecitenew,@PathVariable String idHome,@PathVariable String refElectrecite){
        factureElectreciteRepository.updaterefElectrecite(refElectrecitenew,idHome,refElectrecite);
    }

    @GetMapping("/delete/{idHome}")
    public void delete(@PathVariable String idHome){
        factureElectreciteRepository.deletefacture(idHome);
    }
}
