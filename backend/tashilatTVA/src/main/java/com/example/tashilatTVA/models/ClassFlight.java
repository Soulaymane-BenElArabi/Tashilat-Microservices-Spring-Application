package com.example.tashilatTVA.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="class")
public class ClassFlight {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String name;
    private double price;
    private int nbrPlaces;
    private int placeDispo;
    @JsonIgnore
    @ManyToOne
    private Flight flight;

    public ClassFlight() {
    }

    public ClassFlight(int id, String name, double price, int nbrPlaces, int placeDispo, Flight flight) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.nbrPlaces = nbrPlaces;
        this.placeDispo = placeDispo;
        this.flight = flight;
    }

    public Flight getFlight() {
        return flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getNbrPlaces() {
        return nbrPlaces;
    }

    public void setNbrPlaces(int nbrPlaces) {
        this.nbrPlaces = nbrPlaces;
    }

    public int getPlaceDispo() {
        return placeDispo;
    }

    public void setPlaceDispo(int placeDispo) {
        this.placeDispo = placeDispo;
    }

    @Override
    public String toString() {
        return "Class{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", nbrPlaces=" + nbrPlaces +
                ", placeDispo=" + placeDispo +
                '}';
    }
}
