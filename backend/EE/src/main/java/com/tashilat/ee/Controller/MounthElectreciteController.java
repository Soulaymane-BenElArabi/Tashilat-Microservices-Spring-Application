package com.tashilat.ee.Controller;

import com.tashilat.ee.Model.FactureEau;
import com.tashilat.ee.Model.FactureElectrecite;
import com.tashilat.ee.Model.MouthEau;
import com.tashilat.ee.Model.MouthElectrecite;
import com.tashilat.ee.Repository.MounthEauRepository;
import com.tashilat.ee.Repository.MounthElectreciteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
@RestController
@RequestMapping("MouthElectrecity")
public class MounthElectreciteController {
    @Autowired
    private MounthElectreciteRepository mounthElectreciteRepository;

    @GetMapping("/FactureContrat/{ref}/{year}")
    public List<MouthElectrecite> FactureContrat(@PathVariable String ref,@PathVariable int year){
        List<MouthElectrecite> myArray = new ArrayList<>() ;
        for (MouthElectrecite me:mounthElectreciteRepository.listeRefwater(ref,year)) {
            myArray.add(me);
            System.out.println(ref);
        }
        return myArray;
    }

    @GetMapping("/FactureDatails/{Mounth}/{ref}/{year}")
    public List<MouthElectrecite> detailsfacture(@PathVariable int Mounth,@PathVariable String ref,@PathVariable String year){
        List<MouthElectrecite> myArray = new ArrayList<>() ;
        for (MouthElectrecite me:mounthElectreciteRepository.listeMounthElectricity(Mounth,ref,year)) {
            myArray.add(me);
            System.out.println(ref);
        }
        return myArray;
    }


    @GetMapping("/pay/{mounth}/{refelectric}/{year}/{date}")
    public boolean Facture(@PathVariable int mounth, @PathVariable String refelectric,@PathVariable int year,@PathVariable String date){
        List<MouthElectrecite> myArray = new ArrayList<>() ;
        FactureElectrecite ref = new FactureElectrecite();
        ref.setRefElectrecite(refelectric);
        if(mounth == 1){
            MouthElectrecite me = mounthElectreciteRepository.findByMouthAndFactureElectreciteAndYear(12,ref,year-1) ;
            if(me.getEtatPay()!=true){
                return false;
            }else{
                int yearcurrent = Calendar.getInstance().get(Calendar.YEAR);
                mounthElectreciteRepository.pay(mounth,yearcurrent,ref,date);
                return true;
            }

        }else{
            MouthElectrecite me = mounthElectreciteRepository.findByMouthAndFactureElectreciteAndYear(mounth-1,ref,year) ;
            if(me.getEtatPay()!=true){
                return false;
            }else{
                //int yearcurrent = Calendar.getInstance().get(Calendar.YEAR);
                mounthElectreciteRepository.pay(mounth,year,ref,date);
                return true;
            }

        }
    }




    @GetMapping("/statistics")
    public HashMap<Double,Integer> statistics(@PathVariable int year){
        HashMap<Double,Integer> hashMap = new HashMap<>();
        for (MouthElectrecite me: mounthElectreciteRepository.findByYear(year)) {
            hashMap.put(me.getKwConsomme(),me.getMouth());
        }
        return hashMap;
    }

    @GetMapping("/ListeFacture")
    public List<MouthElectrecite> ListeFacture(){
        List<MouthElectrecite> myArray = new ArrayList<>() ;
        for (MouthElectrecite me:mounthElectreciteRepository.findAll()) {
            myArray.add(me);
        }
        return myArray;
    }

    @GetMapping("/FactureMois/{mounth}/{year}")
    public List<MouthElectrecite> FactureMois(@PathVariable int mounth, @PathVariable int year){
        List<MouthElectrecite> myArray = new ArrayList<>() ;
        for (MouthElectrecite me:mounthElectreciteRepository.findByMouthAndYear(mounth,year)) {
            myArray.add(me);
        }
        return myArray;
    }



    @GetMapping("/insert/{mouth}/{year}/{KwConsome}/{id_home}")
    public void insert(@PathVariable int mouth,@PathVariable int year, @PathVariable double KwConsome,
                       @PathVariable String id_home){
        if(KwConsome >0 &&KwConsome<=100){

            double amount = KwConsome * 0.9010;

            mounthElectreciteRepository.insert(mouth,year,KwConsome,amount,id_home);
        }

        else if(KwConsome>101 && KwConsome<=150 ){

            double amount = KwConsome * 1.0732;

            mounthElectreciteRepository.insert(mouth,year,KwConsome,amount,id_home);
        }
        else{

            double amount = KwConsome * 1.732;

            mounthElectreciteRepository.insert(mouth,year,KwConsome,amount,id_home);
        }

    }




    @GetMapping("/delete/{mounth}/{year}")
    public void delete(@PathVariable int mounth,@PathVariable int year){
        mounthElectreciteRepository.delete(mounth,year);
    }
}
