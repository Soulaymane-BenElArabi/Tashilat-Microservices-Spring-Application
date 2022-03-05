package com.example.springhajar.Model;

import javax.persistence.*;
import java.util.Date;

@Table(name="vehicules")
@Entity
public class Vehicule {
    @Id
    private String matricule;
    private Float amount;
    private String typeCarburant;
    private Integer age;
    private Integer kilometrage;
    @Temporal(TemporalType.DATE)
    private Date dateUpdate;
    @ManyToOne(cascade = CascadeType.PERSIST)
    private Owner owner;
    private boolean factureState;
    private  String nom;

    public boolean isFactureState() {
        return factureState;
    }

    public void setFactureState(boolean factureState) {
        this.factureState = factureState;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }
    public Date getDateUpdate() {
        return dateUpdate;
    }

    public void setDateUpdate(Date dateUpdate) {
        this.dateUpdate = dateUpdate;
    }

    public String getMatricule() {
        return matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    public Float getAmount() {
        return amount;
    }

    public void setAmount(Float amount) {
        this.amount = amount;
    }

    public String getTypeCarburant() {
        return typeCarburant;
    }

    public void setTypeCarburant(String typeCarburant) {
        this.typeCarburant = typeCarburant;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getKilometrage() {
        return kilometrage;
    }

    public void setKilometrage(Integer kilometrage) {
        this.kilometrage = kilometrage;
    }

    public Owner getOwner() {
        return owner;
    }

    public void setOwner(Owner owner) {
        this.owner = owner;
    }

    public Vehicule() {
    }
}
