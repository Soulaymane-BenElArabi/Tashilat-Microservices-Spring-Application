import React, {useLayoutEffect, useState} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'
import {ipAddresses} from "../../shared/Data"
import MyTimeline from '../timeline/Timeline'
import MyCard from '../tva-card/MyCard'/* 
import NotFound from '../not-found/NotFound' */


export default function ResultTva() {
    const location = useLocation()
    const [vehiculeBill, setVehiculeBill] = useState("")
    const allVehiculeBills =  () => {
        axios({
            url: `http://${ipAddresses[0].addresseIP}:8043/vehicules/vehiculeByMatricule/${location.state.matricule}`,
            method: "GET"
        }).then(res =>{
            const responseText = res.data
            setVehiculeBill(responseText)
        }).catch(error => console.log(error+" salim"))    
    };
    useLayoutEffect(() => {
        allVehiculeBills();
    } );
    
    
    return (
        <div className='container'>
            <div  style={{height:95}}></div>
                <MyTimeline choice={"element2"} />
                {/* <h1 style={{marginLeft:"105px"}}>{/* {location.state.matricule} */} {/* Bills with their state: &nbsp;</h1>  */} 
                
                <MyCard  vehiculeBill={vehiculeBill} /> 
                
                
            <div style={{height:285}}></div>
            
        </div>
    )
}
