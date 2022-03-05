import axios from 'axios'
import React, { Component, useState, useLayoutEffect, useRef } from 'react'
import { ipAddresses } from '../shared/Data'
import { useEffect } from 'react/cjs/react.development';

export function AdminWater()  {
    const [mounthInsert, setmounthInsert] = useState('')
    const [yearhInsertate, setyearhInsertate] = useState('')
    const [volumConsommeInsert, setvolumConsommeInsert] = useState('')
    const [refEauInsert, setrefEauInsert] = useState('')
    const changemouth=(event)=>{
        setmounthInsert(event.target.value)
    }
    const changeyearhInsertate=(event)=>{
        setyearhInsertate(event.target.value)
    }
    const changevolumconsomme=(event)=>{
        setvolumConsommeInsert(event.target.value)
    }
    const chnagerefeau=(event)=>{
        setrefEauInsert(event.target.value)
    }
    function moutheauinsert(){
        axios({
            url: "http://"+ipAddresses[1].addresseIP+":8080/MouthWater/insert/"+mounthInsert+"/"+yearhInsertate+"/"+volumConsommeInsert+"/"+refEauInsert,
            method: "GET",
        }).then(res=>{

        }).catch(error=>{console.log("hajar:wile insert into moutheau"+error)})
    }
    useEffect(() => {
        dropDown()
        return () => {
            console.log("testinfg cchart")
        };

    }, []) 
    function dropDown(){
        axios({
            url: "http://"+ipAddresses[1].addresseIP+":8080/FactureEau/select",
            method: "GET",
        }).then(res=>{
           var emptyDropDown = [];
          const Response = res.data
            console.log(Response.refEau)
            for(var i=0;i<Response.length;i++){
                emptyDropDown.push(<option value={Response.refEau}>{Response}</option>)
            }
            return emptyDropDown;

        }).catch(error=>{console.log("hajar:wile insert into moutheau"+error)})
        

    }
    


        return (
            <div>
                <div className="col-4">
                    <div className="registration-form">
                        <form>
                            <div className="form-group">
                                <label>mounth</label>
                                <input type="number" className="form-control item" value={mounthInsert} onChange={changemouth}  placeholder="mounth"/>
                             </div>
                             <div className="form-group">
                                <label>years</label>
                                <input type="number" className="form-control item" value={yearhInsertate} onChange={changeyearhInsertate}  placeholder="years"/>
                             </div>
                             <div className="form-group">
                                <label>consumed volume  </label>
                                <input type="text" className="form-control item" value={volumConsommeInsert} onChange={changevolumconsomme}  placeholder="volumConsomme"/>
                             </div>
                             <div className="form-group">
                                 <label>reference</label>
                                <input type="text" className="form-control item" list="reference" value={refEauInsert} onChange={chnagerefeau} placeholder="reference"/>
                                <select id="reference">
                                    {dropDown()}
                                </select>
                             </div>
                             
                             
                             <div className="form-group">
                                 <div className="row">
                                     <div className="col">
                                     <button type="button"  className="btn btn-block create-account" onClick={moutheauinsert} >insert</button>
                                     </div>
                                     <div className="col">
                                    
                                     </div>
                                 </div>
                                 
                                
                             </div>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    
}


