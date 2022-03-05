package com.example.springhajar.repositories.users;

import com.example.springhajar.Model.Owner;
import com.example.springhajar.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmailAndAndPassword(String email, String  password);
    User findByEmail(String email);
    User findUserById(Integer id);
    @Query("select count(u.id) from User u")
    long getCount();
    @Query("select count(u.id), u.role as role from User u  GROUP BY u.role ")
    List<Object[]> countingUsersByRole();
    /*@Query("SELECT count(m.dateAchat), substring(m.dateAchat, 1, 4) as annee from Machine m GROUP BY substring(m.dateAchat, 1, 4)")
	List<Object[]> countSoulaymane();*/
}
