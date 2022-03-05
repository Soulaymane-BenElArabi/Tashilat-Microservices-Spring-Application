package com.tashilat.ee.Repository;

import com.tashilat.ee.Model.Facture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


public interface FactureRepository extends JpaRepository<Facture,String> {
    @Query(value = "select nom,prenom,adresse,id from Facture,owner,FactureEau where refEau=?1 ",nativeQuery= true)
   List<Object> all(@Param("refeau") String refEau);

 @Query(value = "select nom,prenom,adresse from Facture,owner,FactureElectrecite where refElectrecite=?1 ",nativeQuery= true)
 List<Object> allelec(@Param("refElectrecite") String refElectrecite);
    @Transactional
    @Modifying
    @Query(value="insert into facture(id_home,adresse,cni)(?1,?2,?3)",nativeQuery = true)
    void insert(@Param("id_home")String id_home,@Param("adresse")String adresse,@Param("cni")String cni);

    @Transactional
    @Modifying
    @Query("update Facture f  set f.adresse= :adresse, f.idOwner =:idOwner ,f.idHome =:idHomenew where f.idHome=:idHome")
    void update(@Param("adresse") String adresse,@Param("idOwner") String idOwner,@Param("idHomenew")String idHomenew,
                @Param("idHome")String idHome);



    @Transactional
    @Modifying
    @Query("delete  from Facture f  where f.idHome=:idHome")
    void deletefacture(@Param("idHome")String idHome);
}
