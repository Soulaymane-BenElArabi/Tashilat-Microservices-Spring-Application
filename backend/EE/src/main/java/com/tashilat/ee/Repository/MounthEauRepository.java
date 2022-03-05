package com.tashilat.ee.Repository;

import com.tashilat.ee.Model.FactureEau;
import com.tashilat.ee.Model.MouthEau;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;

public interface MounthEauRepository extends JpaRepository<MouthEau,Integer> {
    // la liste de toutes les factures


    List<MouthEau> findByYear(@Param("year")int year);
    MouthEau findByMouthAndRefEauAndYear(@Param("mounth") int mounth,@Param("ref") FactureEau ref,@Param("year") int year);
    List<MouthEau> findAll();
    // la facture correspondante a un mois dans une annee
    List<MouthEau> findByMouthAndYear(int mounth,int year);


    @Query(value="select count(*) as countwater,date from MouthEau group by date",nativeQuery = true)
    List<Object[]> statisticseau();


   @Query(value="select *  from MouthEau, FactureEau  where FactureEau.refEau=?1 and year=?2",nativeQuery = true)
   List<MouthEau> listeRef(@Param("factureEau")String refEau,@Param("year")int year);

   ///marquer une facture comme paye suivant le mois et l'annee

    @Query(value="select * from MouthEau where mouth=?1 and refEau=?2",nativeQuery = true)
    List<MouthEau> listeMounth(@Param("mouth")int mouth,@Param("refEau")String refEau);

    @Transactional
    @Modifying

    @Query("update MouthEau m  set m.etatPay = 1,m.date=:date where m.mouth=:mouth and m.year=:year and m.refEau=:refEau")
    void pay(@Param("mouth")int mouth,@Param("year")int year,@Param("refEau")FactureEau refEau,@Param("date")String date);

    //supprimer une facture par mois et annee
    @Transactional
    @Modifying
    @Query("delete  from MouthEau m  where m.mouth=:mouth and m.year=:year")
    void delete(@Param("mouth")int mouth,@Param("year")int year);
    //inserer une nouvelle facture
    @Transactional
    @Modifying
    @Query(value="insert into MouthEau(mouth,year,volumConsome,amount,tranche,refEau)Values(?1,?2,?3,?4,?5,?6)",nativeQuery = true)
    void insert(@Param("mouth")int mouth,@Param("year")int year,@Param("volumConsome")double volumConsome,
                @Param("amount")double amount, @Param("tranche")int tranche, @Param("refEau") String refEau);
}
