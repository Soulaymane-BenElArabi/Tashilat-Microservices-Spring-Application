package com.tashilat.ee.Model;

import javax.persistence.*;

@Entity
@DiscriminatorColumn(name="idHome",length = 255)
public  class Facture {
    @Id
    private String idHome;
    private String adresse;
    @ManyToOne(cascade= { CascadeType.REMOVE })
    @JoinColumn(name = "cni")
    private Owner idOwner;

    public Facture(){}
    public Facture(String idHome,String adresse){
        this.idHome=idHome;
        this.adresse=adresse;
    }
    public String getIdHome() {
        return idHome;
    }

    public void setIdHome(String idHome) {
        this.idHome = idHome;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public Owner getIdOwner() {
        return idOwner;
    }

    public void setIdOwner(Owner idOwner) {
        this.idOwner = idOwner;
    }
}
