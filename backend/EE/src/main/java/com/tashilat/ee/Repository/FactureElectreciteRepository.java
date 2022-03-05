package com.tashilat.ee.Repository;

import com.tashilat.ee.Model.FactureElectrecite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface FactureElectreciteRepository extends JpaRepository<FactureElectrecite,String> {
    @Transactional
    @Modifying
    @Query(value="insert into facture_electrecite (ref_electrecite,id_home)values(?1,?2)",nativeQuery = true)
    void insert(@Param("ref_electrecite")String ref_electrecite, @Param("id_home")String id_home);
    @Transactional
    @Modifying
    @Query("update FactureElectrecite  f  set f.refElectrecite = :refElectrecitenew , f.idHome=:idHome where f.refElectrecite = :refElectrecite")
    void updaterefElectrecite(@Param("refElectrecitenew") String refElectrecitenew,@Param("idHome")String idHome,@Param("refElectrecite") String refElectrecite);


    @Transactional
    @Modifying
    @Query("delete  from FactureElectrecite f  where f.idHome=:idHome")
    void deletefacture(@Param("idHome")String idHome);

}
