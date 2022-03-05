package com.example.springhajar.repositories.vehicule;

import com.example.springhajar.Model.Vehicule;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@Transactional
public interface VehiculeRepository extends JpaRepository<Vehicule, String> {

    List<Vehicule> findAll();
    Vehicule findVehiculeByMatricule(String matricule);
    Vehicule findVehiculeByMatriculeAndFactureStateIsFalse(String matricule);
    /*Vehicule findById(int id);*/
    @Modifying
    @Query("update Vehicule v set v.dateUpdate = :dateUpdate, v.factureState = TRUE where v.matricule = :matricule")
    Integer updateVehicule(@Param("dateUpdate")  Date dateUpdate,@Param("matricule")  String matricule);
    @Query("select count(v.matricule), v.dateUpdate from Vehicule v where v.dateUpdate is not  null GROUP BY v.dateUpdate")
    List<Object[]> countingVehiculesByFactureState();
   /* @Query("select count(v.matricule) from Vehicule v where v.dateUpdate = CURRENT_DATE")
    long vehiculeCounter();*/
}
