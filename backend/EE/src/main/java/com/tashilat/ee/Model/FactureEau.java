package com.tashilat.ee.Model;

import javax.persistence.*;

@Entity
public class FactureEau {
    @Id
    private String refEau;
    @OneToOne()
    @JoinColumn(name = "idHome")
    private Facture idHome;

    public FactureEau(String refEau,String idHome){

        this.refEau=refEau;
    }

    public FactureEau() {

    }

    public String getRefEau() {
        return refEau;
    }

    public void setRefEau(String refEau) {
        this.refEau = refEau;
    }


}
