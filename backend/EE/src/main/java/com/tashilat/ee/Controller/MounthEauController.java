package com.tashilat.ee.Controller;

import com.tashilat.ee.Model.FactureEau;
import com.tashilat.ee.Model.MouthEau;
import com.tashilat.ee.Repository.MounthEauRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/MouthWater")
public class MounthEauController {
    @Autowired
    private MounthEauRepository mounthEauRepository;

    @GetMapping("/ListeFacture")
   public List<MouthEau> ListeFacture(){
       List<MouthEau> myArray = new ArrayList<>() ;
        for (MouthEau me:mounthEauRepository.findAll()) {
           myArray.add(me);
        }
        return myArray;
    }

    @GetMapping("/FactureDatails/{Mounth}/{ref}")
    public List<MouthEau> detailsfacture(@PathVariable int Mounth,@PathVariable String ref){
        List<MouthEau> myArray = new ArrayList<>() ;
        for (MouthEau me:mounthEauRepository.listeMounth(Mounth,ref)) {
            myArray.add(me);
            System.out.println(ref);
        }
        return myArray;
    }

   @GetMapping("/FactureMois/{mounth}/{year}")
    public List<MouthEau> FactureMois(@PathVariable int mounth,@PathVariable int year){
        List<MouthEau> myArray = new ArrayList<>() ;
        for (MouthEau me:mounthEauRepository.findByMouthAndYear(mounth,year)) {
            myArray.add(me);
        }
        return myArray;
    }



    @GetMapping("/pay/{mounth}/{refeau}/{year}/{date}")
    public boolean Facture(@PathVariable int mounth, @PathVariable String refeau,@PathVariable int year,@PathVariable String date){
        List<MouthEau> myArray = new ArrayList<>() ;
        FactureEau ref = new FactureEau();
                ref.setRefEau(refeau);
                if(mounth == 1){
                    MouthEau me = mounthEauRepository.findByMouthAndRefEauAndYear(12,ref,year-1) ;
                    if(me.getEtatPay()!=true){
                        return false;
                    }else{
                        int yearcurrent = Calendar.getInstance().get(Calendar.YEAR);
                        mounthEauRepository.pay(mounth,yearcurrent,ref,date);
                        return true;
                    }

                }else{
                    MouthEau me = mounthEauRepository.findByMouthAndRefEauAndYear(mounth-1,ref,year) ;
                    if(me.getEtatPay()!=true){
                        return false;
                    }else{
                        int yearcurrent = Calendar.getInstance().get(Calendar.YEAR);
                        mounthEauRepository.pay(mounth,yearcurrent,ref,date);
                        return true;
                    }

                }
    }



    @GetMapping("/statisticwater")
    public  Map<String, Integer> statisticwater(){
        Map<String, Integer> map = new HashMap<>();
        for(Object[] obj : mounthEauRepository.statisticseau()){
            map.put(String.valueOf(obj[1]), (int) obj[0]);
        }
        return map;

    }


   @GetMapping("/FactureContrat/{ref}/{year}")
        public List<MouthEau> FactureContrat(@PathVariable String ref,@PathVariable int year){
        List<MouthEau> myArray = new ArrayList<>() ;
        for (MouthEau me:mounthEauRepository.listeRef(ref,year)) {
            myArray.add(me);
            System.out.println(ref);
        }
        return myArray;
    }




    /*@GetMapping("/pay")
    public void pay(){
        mounthEauRepository.pay();}*/



    @GetMapping("/delete/{mounth}/{year}")
    public void delete(@PathVariable int mounth,@PathVariable int year){
        mounthEauRepository.delete(mounth,year);
    }

    @GetMapping("/statistics")
    public HashMap<Double,Integer> statistics(@PathVariable int year){
        HashMap<Double,Integer> hashMap = new HashMap<>();
        for (MouthEau me: mounthEauRepository.findByYear(year)) {
            hashMap.put(me.getVolumConsome(),me.getMouth());
        }
       return hashMap;
    }
    @GetMapping("/insert/{mouth}/{year}/{volumConsome}/{refeau}")
    public void insert(@PathVariable int mouth,@PathVariable int year, @PathVariable double volumConsome,
                        @PathVariable String refeau){
        if(volumConsome >0 &&volumConsome<=6){
            int tranche = 1;
           double amount = volumConsome * 2.4;

           mounthEauRepository.insert(mouth,year,volumConsome,amount,tranche,refeau);
        }

        else if(volumConsome>6 && volumConsome<=12 ){
            int tranche = 2;
            double amount = volumConsome * 7.4;

            mounthEauRepository.insert(mouth,year,volumConsome,amount,tranche,refeau);
        }
        else{
            int tranche = 3;
            double amount = volumConsome * 10.98;

            mounthEauRepository.insert(mouth,year,volumConsome,amount,tranche,refeau);
        }

    }
}
