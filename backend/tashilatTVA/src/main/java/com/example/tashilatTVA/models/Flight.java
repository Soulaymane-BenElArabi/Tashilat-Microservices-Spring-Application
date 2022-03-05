package com.example.tashilatTVA.models;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="vol")
public class Flight {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    @Temporal(TemporalType.DATE)
    private Date dateDeppart;
    @Temporal(TemporalType.DATE)
    private Date dateArrivee;
    private String villeDepart;
    private String villeArrivee;
    private int nbrPlaces;
    private Integer placeDispo;
    private LocalTime timeFlight;
    private LocalTime timeArrivee;
    private String company;
    @OneToMany(mappedBy = "flight")
    private List<ClassFlight> classes;

    public Flight() {
        this.classes = new ArrayList<>();
    }

    public Flight(int id, Date dateDeppart, Date dateArrivee, String villeDepart, String villeArrivee, int nbrPlaces, Integer placeDispo, LocalTime timeFlight, String company, List<ClassFlight> classes) {
        this.id = id;
        this.dateDeppart = dateDeppart;
        this.dateArrivee = dateArrivee;
        this.villeDepart = villeDepart;
        this.villeArrivee = villeArrivee;
        this.nbrPlaces = nbrPlaces;
        this.placeDispo = placeDispo;
        this.timeFlight = timeFlight;
        this.company = company;
        this.classes = classes;
    }

    public LocalTime getTimeArrivee() {
        return timeArrivee;
    }

    public void setTimeArrivee(LocalTime timeArrivee) {
        this.timeArrivee = timeArrivee;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public List<ClassFlight> getClasses() {
        return classes;
    }

    public void setClasses(List<ClassFlight> classes) {
        this.classes = classes;
    }

    public void setPlaceDispo(Integer placeDispo) {
        this.placeDispo = placeDispo;
    }

    public LocalTime getTimeFlight() {
        return timeFlight;
    }

    public void setTimeFlight(LocalTime timeFlight) {
        this.timeFlight = timeFlight;
    }

    public int getPlaceDispo() {
        return placeDispo;
    }

    public void setPlaceDispo(int placeDispo) {
        this.placeDispo = placeDispo;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDateDeppart() {
        return dateDeppart;
    }

    public void setDateDeppart(Date dateDeppart) {
        this.dateDeppart = dateDeppart;
    }

    public Date getDateArrivee() {
        return dateArrivee;
    }

    public void setDateArrivee(Date dateArrivee) {
        this.dateArrivee = dateArrivee;
    }

    public String getVilleDepart() {
        return villeDepart;
    }

    public void setVilleDepart(String villeDepart) {
        this.villeDepart = villeDepart;
    }

    public String getVilleArrivee() {
        return villeArrivee;
    }

    public void setVilleArrivee(String villeArrivee) {
        this.villeArrivee = villeArrivee;
    }

    public int getNbrPlaces() {
        return nbrPlaces;
    }

    public void setNbrPlaces(int nbrPlaces) {
        this.nbrPlaces = nbrPlaces;
    }

    @Override
    public String toString() {
        return "Flight{" +
                "id=" + id +
                ", dateDeppart=" + dateDeppart +
                ", dateArrivee=" + dateArrivee +
                ", villeDepart='" + villeDepart + '\'' +
                ", villeArrivee='" + villeArrivee + '\'' +
                ", nbrPlaces=" + nbrPlaces +
                ", placeDispo=" + placeDispo +
                ", timeFlight=" + timeFlight +
                ", company='" + company + '\'' +
                ", classes=" + classes +
                '}';
    }
}
