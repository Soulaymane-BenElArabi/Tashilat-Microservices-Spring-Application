package com.tashilat.ee.Controller;

import com.tashilat.ee.Model.FactureEau;
import com.tashilat.ee.Repository.FactureEauRepository;
import com.tashilat.ee.Repository.MounthEauRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/FactureEau")
public class FactureEauController {
    @Autowired
    private FactureEauRepository factureEauRepository;

    @GetMapping("/select")
    public FactureEau FactureEau (){
        return factureEauRepository.dropDownRefEau();
    }
@GetMapping("/insert/{refEau}/{idHome}")
    public void insert (@PathVariable String refEau,@PathVariable String idHome){
    factureEauRepository.insert(refEau,idHome);
}
@GetMapping("/updaterefEau/{refEaunew}/{idHome}/{refEau}/")
    public void updaterefEau(@PathVariable String refEaunew,@PathVariable String idHome,@PathVariable String refEau){
    factureEauRepository.update(refEaunew,idHome,refEau);
}


    @GetMapping("/delete/{idHome}")
    public void delete(@PathVariable String refeau){
        factureEauRepository.deletefacture(refeau);
    }



}
