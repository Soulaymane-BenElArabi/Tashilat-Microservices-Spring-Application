package com.tashilat.ee.Model;

import javax.persistence.*;

@Entity
public class FactureElectrecite {
    @Id
    private String refElectrecite;
    @OneToOne()
    @JoinColumn(name = "idHome")
    private Facture idHome;
    public FactureElectrecite(String idHome,String refElectrecite){

        this.refElectrecite=refElectrecite;

    }

    public FactureElectrecite() {

    }


    public String getRefElectrecite() {
        return refElectrecite;
    }

    public void setRefElectrecite(String refElectrecite) {
        this.refElectrecite = refElectrecite;
    }


}
