package com.tashilat.ee.Model;

import java.io.Serializable;

public class CombinedId  implements Serializable {
    private  int mouth;
    private int year;

    public CombinedId(int mouth, int year) {
        this.mouth = mouth;
        this.year = year;
    }

    public CombinedId() {
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
}
