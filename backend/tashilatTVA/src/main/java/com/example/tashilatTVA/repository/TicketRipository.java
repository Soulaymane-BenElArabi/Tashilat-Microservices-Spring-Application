package com.example.tashilatTVA.repository;

import com.example.tashilatTVA.models.Flight;
import com.example.tashilatTVA.models.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface TicketRipository extends JpaRepository<Ticket, Integer> {

        Ticket findById(int id);
        @Query("select count (m.id) as numberTicket,m.dateAchat as dates from Ticket m GROUP BY m.dateAchat")
        List<Object[]> ticketsPerDay();
        /*@Query("select count (m.id) as TicketVendu from Ticket m where m.flight.id=?1 and m.etat=true ")
        int NbrTicketVendu(int idFlight);*/
       /* List<Ticket> findTicketsByClasseAndFlight_DateDeppartAndFlight_VilleDepartAAndFlight_VilleArriveeAndFlight_PlaceDispoGreaterThan(
                String classe, Date dateDeppart, String villeDepart, String villeArrivee, Integer placeDispo
        );
*/
        //List<Ticket> findTicketsByClasseAndFlightIn(String classe, List<Flight> flights);


}
