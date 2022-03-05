package com.example.tashilatTVA.repository;

import com.example.tashilatTVA.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ClientRepository extends JpaRepository<Client,Integer> {
    public Client findByNom(String nom);
    public Client findByPassport(String pass);


}
