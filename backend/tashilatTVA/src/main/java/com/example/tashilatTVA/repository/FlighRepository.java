package com.example.tashilatTVA.repository;

import com.example.tashilatTVA.models.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface FlighRepository extends JpaRepository<Flight,Integer> {

    /*@Query("SELECT m from Flight m where m.dateArrivee=?1 and m.dateDeppart=?1 and m.villeArrivee=?1 and m.villeDepart=?1 and m.placeDispo>?1")
    List<Flight> flights(Date dateA, Date  dateD,String villeA,String villeD, Integer nbrP);
    List<Flight> findFlightsByDateArriveeAndDateDeppartAndVilleDepartAndVilleArriveeAndPlaceDispoIsGreaterThan(
            Date dateArrivee, Date  dateDeppart,String villeDepart,String villeArrivee, Integer placeDispo);*/
    List<Flight> findFlightsByDateDeppartAndVilleDepartAndVilleArriveeAndPlaceDispoGreaterThan(
            Date  dateDeppart,String villeDepart,String villeArrivee, Integer placeDispo
    );

    Flight findFlightById(int id);
    List<Flight> findFlightsByDateDeppartAndVilleDepartAndVilleArrivee(Date  dateDeppart,String villeDepart,String villeArrivee);
}
