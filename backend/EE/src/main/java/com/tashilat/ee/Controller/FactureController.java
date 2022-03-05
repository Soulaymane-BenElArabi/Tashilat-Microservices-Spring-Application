package com.tashilat.ee.Controller;

import com.tashilat.ee.Repository.FactureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@RestController
@RequestMapping("/Facture")
public class FactureController {
    @Autowired
    private FactureRepository factureRepository;

    @GetMapping("/all/{refeau}")
    public List<Object> all(@PathVariable String refeau){
        List<Object> list  = new ArrayList<>();
      for(Object o : factureRepository.all(refeau)) {
          list.add(o);
      }
      return list;
    }
    @GetMapping("/allelec/{refElectrecite}")
    public List<Object> allelec(@PathVariable String refElectrecite){
        List<Object> list  = new ArrayList<>();
        for(Object o : factureRepository.allelec(refElectrecite)) {
            list.add(o);
        }
        return list;
    }
    @GetMapping("/insert/{idHome}/{adresse}/{cni}")
    public void insert (@PathVariable String idHome, @PathVariable String adresse,@PathVariable String cni){
        factureRepository.insert(idHome,adresse,cni);
    }
   /* @GetMapping("/update/{adress}/{cni}/{idHome}")
    public void update(@PathVariable String adress,@PathVariable String cni ,@PathVariable String idHome){
        factureRepository.update(adress,cni,idHome);
    }

    @GetMapping("/delete/{idHome}")
    public void delete(@PathVariable String idHome){
        factureRepository.deletefacture(idHome);
    }*/

}
