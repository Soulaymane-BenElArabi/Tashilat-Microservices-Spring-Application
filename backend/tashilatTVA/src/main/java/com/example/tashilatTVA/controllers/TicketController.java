package com.example.tashilatTVA.controllers;

import com.example.tashilatTVA.models.Flight;
import com.example.tashilatTVA.models.Ticket;
import com.example.tashilatTVA.repository.FlighRepository;
import com.example.tashilatTVA.repository.TicketRipository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("tickets")
public class TicketController {
    @Autowired
    TicketRipository ticketRipository;
    @Autowired
    FlighRepository flighRepository;
    /*@PostMapping("/count")
    public int countTicketSELLED(@RequestBody Flight flight){
        System.out.println(flight.getId());
        return ticketRipository.NbrTicketVendu(flight.getId());
    }*/
    @PostMapping("/save")
    public void saveTicket(@RequestBody Ticket ticket){
        ticketRipository.save(ticket);
    }
    @GetMapping("/all")
    public List<Ticket> getAllTickets(){
        return ticketRipository.findAll();
    }
    /*@PostMapping("/ticketsDispo")
    public List<Ticket> ticketsDispo(Ticket ticket){
       List<Flight> flights = flighRepository.findFlightsByDateDeppartAndVilleDepartAndVilleArriveeAndPlaceDispoGreaterThan(
               ticket.getFlight().getDateDeppart(),ticket.getFlight().getVilleDepart(),
               ticket.getFlight().getVilleArrivee(),ticket.getFlight().getNbrPlaces()
       );
       return ticketRipository.findTicketsByClasseAndFlightIn(ticket.getClasse(),flights);
    }*/
    @GetMapping("/num")
    public Map<String, Long> numTickets(){
        Map<String, Long> map = new HashMap<>();
        for(Object[] obj : ticketRipository.ticketsPerDay()){
            map.put(String.valueOf(obj[1]), (Long) obj[0] );
        }
        return map;

    }
}
