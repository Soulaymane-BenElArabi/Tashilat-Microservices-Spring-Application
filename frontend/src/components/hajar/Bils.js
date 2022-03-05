import { Component } from "react/cjs/react.production.min";
import {  useState, useLayoutEffect, useRef } from 'react'
import './Bils.css'
import lightLogo from '../../images/hajar/lightLogo.png'
import WaterLogo from '../../images/hajar/WaterLogo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import React from 'react'


export default function Bils() {
    const [Refwater, setRefwater] = useState('')
    const [Refelectric, setRefelectric] = useState('')
const watervalue=(event)=> {
    setRefwater(
        event.target.value
    )
    
}
const electricvalue=(event)=> {
    setRefelectric(
        event.target.value
    )
    
}  
function hideshowater() {
    document.getElementById("principaldivelectric").style.display = "none";
    document.getElementById("falseButtonelectric").style.display = "";
   document.getElementById("principaldivwater").style.display = "";
    document.getElementById("falseButtonWater").style.display = "none";
 }
function hideshowelectric() {
document.getElementById("falseButtonWater").style.display = "";
 document.getElementById("principaldivelectric").style.display = "";
    document.getElementById("falseButtonelectric").style.display = "none";
     document.getElementById("principaldivwater").style.display = "none";

     
 
 }
const navigate = useNavigate();
function Navigate() {
    
navigate('/eauElectrecity/waterBils',{state:{referenceWater : Refwater}});

    
}
function navigatElectrecity() {
    
console.log(Refelectric)
    navigate('/eauElectrecity/electrecityBils',{state:{referencElectrecity : Refelectric}});
        
    }

    return (
        <div>        
            <div style={{height:60}}></div>
                <div className = 's1 py-5 hero mb-5'>
                    <div className = 'container '>
                         <div className = 'd d-flex flex-wrap justify-content-center' >

                      <div className = 'b mb-5 text-center p-3 shadow rounded mx-2'>
                      <div>
                                 <img className = 'img-fluid mb-3' alt='' src={WaterLogo} />
                                 <p className = 'title'>Pay your water bills</p>
                             <div>
                                    <button id="falseButtonWater" className = 'btn btn-outline-primary btn-sm text-capitalize' onClick={hideshowater}>pay now <i className="ms-2 fas fa-chevron-right"></i></button>
                             </div>
                         </div>
                         <form method="Get" action="/waterBils">
                             <div className="input-group mb-3" id="principaldivwater"   style={{display:"none"}} >
                                 <div>
                                        <input type="text" className="form-control" id="inputWater" onChange={watervalue} value={Refwater} name="Refwater"   placeholder="reference water" aria-label="water" aria-describedby="basic-addon1" required/>
                                    </div>
                                    <div className="input-group-prepend">
                                        <button className = 'btn btn-outline-primary btn-sm text-capitalize' onClick={Navigate} >submit<i className="ms-2 fas fa-chevron-right"></i></button>
                                    </div>
                            </div>
                         </form>
                             
                         </div>


                         <div id="space"></div>


                        <div className = 'b mb-5 text-center p-3 shadow rounded mx-2'>
                        <div>
                                 <img className = 'img-fluid mb-3' alt='' src={lightLogo} />
                                 <p className = 'title'>Pay your Electricity bills</p>
                            
                             <div>
                                <button id="falseButtonelectric" className = 'btn btn-outline-warning btn-sm text-capitalize' onClick={hideshowelectric} >pay now <i className="ms-2 fas fa-chevron-right"></i></button>
                             </div>
                        </div>
                            
                                <div className="input-group mb-3" id="principaldivelectric" style={{display:"none"}}>
                                   <div>
                                        <input type="text" required className="form-control" onChange={electricvalue} value={Refelectric} id="inputElectrecic" placeholder="reference electrecity" aria-label="electrecity" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group-prepend">
                                        <button className = 'btn btn-outline-warning btn-sm text-capitalize' onClick={navigatElectrecity} >submit<i className="ms-2 fas fa-chevron-right"></i></button>
                                    </div>
                             </div>
                            
                           
                        
                    </div>














                     </div>
                    </div>
                </div>
            <div style={{height:10}}></div>
        </div>
    )
}



        
      
    
