package com.tashilat.ee.Repository;

import com.tashilat.ee.Model.FactureEau;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface FactureEauRepository extends JpaRepository<FactureEau,String> {
    @Query(value="select * from FactureEau",nativeQuery = true)
    FactureEau dropDownRefEau();
    @Transactional
    @Modifying
    @Query(value="insert into facture_eau(ref_eau,id_home)values(?1,?2)",nativeQuery = true)
            void insert(@Param("ref_eau")String ref_eau,@Param("id_home")String id_home);
    @Transactional
    @Modifying
    @Query("update FactureEau f  set f.refEau= :refEaunew,f.idHome=:idHome where f.refEau= :refEau ")
    void update(@Param("refEaunew") String refEaunew,@Param("idHome")String idHome,@Param("refEau") String refEau);



    @Transactional
    @Modifying
    @Query("delete  from FactureEau f  where f.refEau= :refEau")
    void deletefacture(@Param("refEau")String refEau);


}
