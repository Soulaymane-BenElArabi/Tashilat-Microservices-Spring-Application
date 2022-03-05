package com.example.tashilatTVA.controllers;

import com.example.tashilatTVA.models.ClassFlight;
import com.example.tashilatTVA.models.Flight;
import com.example.tashilatTVA.repository.FlighRepository;
import com.example.tashilatTVA.repository.TicketRipository;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("flights")
public class FlightController {
    @Autowired
    FlighRepository flightRepository;
    @Autowired
    TicketRipository ticketRipository;
    @PostMapping("save")
    public void save(@RequestBody Flight flight){
        System.out.println(flight.getDateDeppart());
        flightRepository.save(flight);
    }

    @GetMapping("showAll")
    public List<Flight> allFlights(){
        return flightRepository.findAll();
    }
   /* @PostMapping("placeDispo")
    public int placeDispo(@RequestBody Flight flight){
        int ticketVendu = ticketRipository.NbrTicketVendu(flight.getId());
        System.out.println(ticketVendu);
        int placeDispo = flight.getNbrPlaces()-ticketVendu;
        flight.setPlaceDispo(placeDispo);
        return placeDispo;
    }*/
    @PostMapping("/flightsDispo")
    List<Flight> flightDispo(@RequestBody ObjectNode objectNode){
            List<Flight> flights = new ArrayList<>();
            String dated = objectNode.get("dateDeppart").asText();
            //String datea = objectNode.get("str1").asText();
            String villed = objectNode.get("villeDepart").asText();
            String villea = objectNode.get("villeArrivee").asText();
            String nbrPlace = objectNode.get("nbrPlaces").asText();
            System.out.println(" "+villea+" "+villed+nbrPlace);
            Date dateD = null;
            try {
                 dateD = new SimpleDateFormat("yyyy-MM-dd").parse(dated);

            }catch (ParseException e) {
                e.printStackTrace();
            }
            flights = flightRepository.findFlightsByDateDeppartAndVilleDepartAndVilleArriveeAndPlaceDispoGreaterThan(
                dateD, villed,villea,Integer.parseInt(nbrPlace)
            );
        for (Flight flight:flights
             ) {

            System.out.println("\n"+flight);
        }

       return flights;
    }
    /*@PostMapping("/flightsDispoRound")
    List<Pair<Flight,Flight>> flightDispoRound(@RequestBody Flight flight){
        System.out.println(flight.getDateDeppart());
        List<Flight> aller = flightRepository.findFlightsByDateDeppartAndVilleDepartAndVilleArriveeAndPlaceDispoGreaterThan(
                flight.getDateDeppart(), flight.getVilleDepart(),flight.getVilleArrivee(), flight.getNbrPlaces()
        );
        List<Flight> retour = flightRepository.findFlightsByDateDeppartAndVilleDepartAndVilleArriveeAndPlaceDispoGreaterThan(
                flight.getDateArrivee(),flight.getVilleArrivee(),flight.getVilleDepart(),flight.getNbrPlaces()
        );
        int i,j;
        List<Pair<Flight,Flight>> pairList = new ArrayList<Pair<Flight,Flight>>();
        for (i=0,j=0;i<aller.size() && j<retour.size();i++,j++){

            pairList.add(new Pair(aller.get(i),retour.get(j)));
        }
        return pairList;
        *//*while (i<retour.size() && j<aller.size()){
            List<Pair<Flight,Flight>> pairList = new ArrayList<Pair<Flight,Flight>>();
            pairList.add(new Pair<>(retour[i],aller[j]));
        }*//*


    }
    */
    /*@PostMapping("/yaRab/{id}")
    public String findClassofFlight(@PathVariable Integer id){
        Flight flight = flightRepository.findFlightById(id);
        List<ClassFlight> classesFlights = flight.getClasses();
        return  classesFlights.get(1).getName();
    }*/
    @PostMapping("/yarbi")
    List<Flight> flightsTest(@RequestBody ObjectNode objectNode){
        String dated = objectNode.get("dateDeppart").asText();
        //String datea = objectNode.get("str1").asText();
        String villed = objectNode.get("villeDepart").asText();
        String villea = objectNode.get("villeArrivee").asText();
        String nbrPlace = objectNode.get("nbrPlaces").asText();
        List<Flight> finalFlights = new ArrayList<>();
        String className = objectNode.get("class").asText();
        System.out.println("\n");
        System.out.println(className);
        System.out.println("\n");
        try {
            Date dateD = new SimpleDateFormat("yyyy-MM-dd").parse(dated);
            List<Flight> flights = flightRepository.findFlightsByDateDeppartAndVilleDepartAndVilleArrivee(dateD,villed ,villea);
            System.out.println(flights);
            for (Flight kiko : flights){
                System.out.println(kiko);
                if (className =="Buisness"){
                    System.out.println(className);
                    int placeSurClassDispo = kiko.getClasses().get(0).getPlaceDispo();
                    System.out.println(kiko.getClasses().get(0));
                    if (placeSurClassDispo>Integer.parseInt(nbrPlace)) finalFlights.add(kiko);

                }
                else if (className =="Economic"){
                    int placeSurClassDispo = kiko.getClasses().get(1).getPlaceDispo();
                    System.out.println(kiko.getClasses());
                    if (placeSurClassDispo>Integer.parseInt(nbrPlace)) finalFlights.add(kiko);

                }
                else {
                    int placeSurClassDispo = kiko.getClasses().get(2).getPlaceDispo();
                    if (placeSurClassDispo>Integer.parseInt(nbrPlace)) finalFlights.add(kiko);

                }


            }
            System.out.println(finalFlights);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return finalFlights;
    }
    @PostMapping("/flightsDispoRound")
    List<Pair<Flight,Flight>> flightsDispoRound(@RequestBody ObjectNode objectNode){
        String dated = objectNode.get("dateDeppart").asText();
        String datea = objectNode.get("dateArrivee").asText();
        String villed = objectNode.get("villeDepart").asText();
        String villea = objectNode.get("villeArrivee").asText();
        String nbrPlace = objectNode.get("nbrPlaces").asText();
        List<Flight> aller = new ArrayList<>();
        List<Flight> retour = new ArrayList<>();
        System.out.println("villeDeppart"+villed);
        System.out.println("villeA  "+villea);
        List<Pair<Flight,Flight>> pairList = new ArrayList<Pair<Flight,Flight>>();
        String className = objectNode.get("class").asText();
        System.out.println("\n");
        System.out.println(className);
        System.out.println("\n");
        Date dateD = null;
        Date dateA = null;
        try {
            dateD = new SimpleDateFormat("yyyy-MM-dd").parse(dated);
            dateA = new SimpleDateFormat("yyyy-MM-dd").parse(datea);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        List<Flight> flightsAller = flightRepository.findFlightsByDateDeppartAndVilleDepartAndVilleArrivee(dateD,villed,villea);
        System.out.println(flightsAller);
        for (Flight kiko : flightsAller){
            System.out.println(kiko);
            if (className =="Buisness"){
                System.out.println(className);
                int placeSurClassDispo = kiko.getClasses().get(0).getPlaceDispo();
                System.out.println(kiko.getClasses().get(0));
                if (placeSurClassDispo>Integer.parseInt(nbrPlace)) aller.add(kiko);

            }
            else if (className =="Economic"){
                int placeSurClassDispo = kiko.getClasses().get(1).getPlaceDispo();
                System.out.println(kiko.getClasses());
                if (placeSurClassDispo>Integer.parseInt(nbrPlace)) aller.add(kiko);

            }
            else {
                int placeSurClassDispo = kiko.getClasses().get(2).getPlaceDispo();
                if (placeSurClassDispo>Integer.parseInt(nbrPlace)) aller.add(kiko);

            }


        }
        System.out.println("allerFlights   "+aller);
        System.out.println("date de retour"+dateA);
        //Les vols de retour
        List<Flight> flightsRetour = flightRepository.findFlightsByDateDeppartAndVilleDepartAndVilleArrivee(dateA,villea,villed);
        for (Flight retourkiko : flightsRetour){
            System.out.println(retourkiko);
            if (className =="Buisness"){
                System.out.println(className);
                int placeSurClassDispo = retourkiko.getClasses().get(0).getPlaceDispo();
                System.out.println(retourkiko.getClasses().get(0));
                if (placeSurClassDispo>Integer.parseInt(nbrPlace)) retour.add(retourkiko);

            }
            else if (className =="Economic"){
                int placeSurClassDispo = retourkiko.getClasses().get(1).getPlaceDispo();
                System.out.println(retourkiko.getClasses());
                if (placeSurClassDispo>Integer.parseInt(nbrPlace)) retour.add(retourkiko);

            }
            else {
                int placeSurClassDispo = retourkiko.getClasses().get(2).getPlaceDispo();
                if (placeSurClassDispo>Integer.parseInt(nbrPlace)) retour.add(retourkiko);
                System.out.println(placeSurClassDispo);
            }


        }
        System.out.println("retourFlights   "+retour);
        //Le total des vols
        int i,j;
        for (i=0,j=0;i<aller.size() && j<retour.size();i++,j++){
            pairList.add(new Pair(aller.get(i),retour.get(j)));
        }
        System.out.println("final flight  "+pairList);
        return pairList;
    }


}
