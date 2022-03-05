package com.tashilat.ee.Repository;

import com.tashilat.ee.Model.FactureEau;
import com.tashilat.ee.Model.FactureElectrecite;
import com.tashilat.ee.Model.MouthEau;
import com.tashilat.ee.Model.MouthElectrecite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface MounthElectreciteRepository  extends JpaRepository<MouthElectrecite,Integer> {
    List<MouthElectrecite> findAll();
    MouthElectrecite findByMouthAndFactureElectreciteAndYear (@Param("mounth") int mounth, @Param("ref") FactureElectrecite ref, @Param("year") int year);
    List<MouthElectrecite> findByMouthAndYear(int mounth,int year);
    List<MouthElectrecite> findByYear(@Param("year")int year);

    @Query(value="select *  from MouthElectrecite,FactureElectrecite  where FactureElectrecite.refElectrecite=?1 and year=?2",nativeQuery = true)
    List<MouthElectrecite> listeRefwater(@Param("factureElectrecity")String refEau,@Param("year")int year);

    @Query(value="select * from MouthElectrecite where mouth=?1 and refElectrecite=?2 and year=?3",nativeQuery = true)
    List<MouthElectrecite> listeMounthElectricity(@Param("mouth")int mouth,@Param("refElectrecite")String refElectrecite,@Param("year")String year);



    @Transactional
    @Modifying
    @Query("update MouthElectrecite m  set m.etatPay = 1,m.date=:date where m.mouth=:mouth and m.year=:year and m.factureElectrecite=:factureElectrecite")
    void pay(@Param("mouth")int mouth, @Param("year")int year,@Param("factureElectrecite")FactureElectrecite factureElectrecite,
             @Param("date")String date);

    @Transactional
    @Modifying
    @Query("delete from MouthElectrecite m  where m.mouth=:mouth and m.year=:year")
    void delete(@Param("mouth")int mouth,@Param("year")int year);

    @Transactional
    @Modifying
    @Query(value="insert into mouth_electrecite(mouth,year,amount,kw_consomme,facture_electrecite_id_home)" +
            "Values(?1,?2,?3,?4,?5)",nativeQuery = true)
    void insert(@Param("mouth")int mouth,@Param("year")int year, @Param("amount")double amount,
                @Param("kw_consomme")double kw_consomme, @Param("factureElectrecite") String id_home);
}
