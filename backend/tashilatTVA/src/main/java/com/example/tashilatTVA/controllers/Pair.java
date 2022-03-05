package com.example.tashilatTVA.controllers;

public class Pair<L,R> {
    private L a;
    private R r;
    public Pair(L a, R r){
        this.a = a;
        this.r = r;
    }

    public L getA() {
        return a;
    }

    public void setA(L a) {
        this.a = a;
    }

    public R getR() {
        return r;
    }

    public void setR(R r) {
        this.r = r;
    }
}
