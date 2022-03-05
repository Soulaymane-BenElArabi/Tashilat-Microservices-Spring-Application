package com.tashilat.ee.Model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@IdClass(CombinedId.class)
public class MouthEau  {
    @Id
   private  int mouth;
    @Id
    private int year;
    private double amount;
    private int tranche;
    private double volumConsome;
    @Column(columnDefinition = "bit default 0")
    private boolean etatPay = false;
    private String date;
    private String time ;
    @ManyToOne(cascade= { CascadeType.REMOVE })
    @JoinColumn(name = "refEau")
    private FactureEau refEau;

    public MouthEau() {
    }

    public MouthEau(int mouth, int year, double amount, int tranche, double volumConsome, boolean etatPay, FactureEau refEau) {
        this.mouth = mouth;
        this.year = year;
        this.amount = amount;
        this.tranche = tranche;
        this.volumConsome = volumConsome;
        this.etatPay = etatPay;
        this.refEau = refEau;
    }



    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public FactureEau getRefEau() {
        return refEau;
    }

    public void setRefEau(FactureEau refEau) {
        this.refEau = refEau;
    }

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

    public int getTranche() {
        return tranche;
    }

    public void setTranche(int tranche) {
        this.tranche = tranche;
    }

    public double getVolumConsome() {
        return volumConsome;
    }

    public void setVolumConsome(double volumConsome) {
        this.volumConsome = volumConsome;
    }

    public boolean getEtatPay() {
        return etatPay;
    }

    public void setEtatPay(boolean etatPay) {
        this.etatPay = etatPay;
    }

    public FactureEau getFactureEau() {
        return refEau;
    }

    public void setFactureEau(FactureEau refEau) {
        this.refEau = refEau;
    }
}
