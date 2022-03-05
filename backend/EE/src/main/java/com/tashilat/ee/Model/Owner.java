package com.tashilat.ee.Model;

import javax.persistence.*;

@Entity
public class Owner {
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Id
    private String cni;
    private String nom;
    private String prenom;

    public Owner(){}
    public Owner(String cni,String nom,String prenom){
        this.cni = cni;
        this.nom=nom;
        this.prenom=prenom;
    }

    public String getCni() {
        return cni;
    }

    public void setCni(String cni) {
        this.cni = cni;
    }


    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }
}
