package com.tashilat.ee.Model;

import javax.persistence.*;

@Entity()
@IdClass(CombinedId.class)
public class MouthElectrecite {
    @Id
    private  int mouth;
    @Id
    private int year;
    private double amount;
    private double kwConsomme;
    private String date;
    private String time ;
    @Column(columnDefinition = "bit default 0")
    private boolean etatPay = false;
    @ManyToOne(cascade= { CascadeType.REMOVE })
    @JoinColumn(name = "refElectrecite")
    private FactureElectrecite factureElectrecite;

    public MouthElectrecite(){}

    public int getMouth() {
        return mouth;
    }

    public void setMouth(int mouth) {
        this.mouth = mouth;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public double getKwConsomme() {
        return kwConsomme;
    }

    public void setKwConsomme(double kwConsomme) {
        this.kwConsomme = kwConsomme;
    }

    public boolean getEtatPay() {
        return etatPay;
    }

    public void setEtatPay(boolean etatPay) {
        this.etatPay = etatPay;
    }

    public FactureElectrecite getFactureElectrecite() {
        return factureElectrecite;
    }

    public void setFactureElectrecite(FactureElectrecite factureElectrecite) {
        this.factureElectrecite = factureElectrecite;
    }
}

