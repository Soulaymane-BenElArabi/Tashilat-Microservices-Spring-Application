package com.example.tashilatTVA.controllers;

import com.example.tashilatTVA.models.Client;
import com.example.tashilatTVA.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("clients")
public class ClientController {
    @Autowired
    ClientRepository clientRepository;
    @GetMapping("/findclient")
    public Client findByName(@RequestBody String name){
        System.out.println(name);
        return clientRepository.findByNom(name);
    }
    @GetMapping("/findByPasseport")
    public Client findByPaasport(@RequestBody String nPassport){
        return clientRepository.findByPassport(nPassport);

    }
    @PostMapping("/save")
    public void save(@RequestBody Client client){
        clientRepository.save(client);
    }
    @GetMapping("/all")
    public List<Client> clients(){
        return clientRepository.findAll();
    }

}
