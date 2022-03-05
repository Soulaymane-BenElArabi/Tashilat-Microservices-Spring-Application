package com.example.springhajar.repositories.owner;

import com.example.springhajar.Model.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface OwnerRepository extends JpaRepository<Owner,Integer> {
    List<Owner> findAll();
    Owner findOwnerByCin(String cin);
    void delete(Owner owner);
    @Query("select o from Owner o where o.id = ?1")
    Owner trouverById(Integer id);


    //Optional<Owner> findById(Integer id);
    /* a voir apres
    * @Query("SELECT count(m.dateAchat), substring(m.dateAchat, 1, 4)
    *  as annee from Machine m GROUP BY substring(m.dateAchat, 1, 4)")
	List<Object[]> countSoulaymane();
	*
	* @Query(" select u from User u " +
            " where u.username = ?1")
    Optional<User> findUserWithName(String username);*/
}
