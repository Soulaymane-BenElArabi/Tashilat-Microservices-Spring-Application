package com.example.tashilatTVA.models;

import javax.persistence.*;
import java.util.Date;
@Entity
@Table(name="ticket")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Temporal(TemporalType.DATE)
    private Date dateAchat;
    /*private double prix;
    @ManyToOne
    private Client client;
    @ManyToOne
    private Flight flight;
    private boolean etat;
    private String classe;
    private String siege;
    private int numeroPlace;*/

    public Ticket(int id, Date dateAchat) {
        this.id = id;
        this.dateAchat = dateAchat;
    }

    public Ticket() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDateAchat() {
        return dateAchat;
    }

    public void setDateAchat(Date dateAchat) {
        this.dateAchat = dateAchat;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "id=" + id +
                ", dateAchat=" + dateAchat +
                '}';
    }
}