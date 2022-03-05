import './CardRound.css'
import { useNavigate } from 'react-router-dom';
import React, {Component, useLayoutEffect, useState} from 'react'
import flight from '../../../../images/vol/flight.jpg'
import ryanair from '../../../../images/vol/ryanair.png'
import easyjet from '../../../../images/vol/easyjet.png'
import arabia from '../../../../images/vol/arabia.jpg'
import marocair from '../../../../images/vol/marocAir.png'
export default function CardRound(props) {
    const navigate = useNavigate();
    console.log(props)
    const [priceFlightA,setpriceFlightA] = useState("")
    const [priceFlightR,setpriceFlightR] = useState("")
    var companyImage=null;
    if (props.flight.a.company=='Reyanair') {
        companyImage=ryanair;
    }else if (props.flight.a.company=='AirArabia') {
        companyImage=arabia;
    }
    else if (props.flight.a.company=='RoyalAirMaroc') {
            companyImage=marocair;      
    }
    else{
        companyImage=flight;
    }
    
   useLayoutEffect(()=>{
    props.flight.a.classes.map(classFlight=>{ 
         if (classFlight.name==props.classsee)
         {
            setpriceFlightA(classFlight.price); 
        }
         
    });
    props.flight.r.classes.map(classFlight=>{ 
        if (classFlight.name==props.classsee)
        {
           setpriceFlightR(classFlight.price); 
       }
        
   });

   })
   
   const handelBuy=()=> {
    navigate('/ba/user',{state:{flight:props.flight,typeflight:'round',classFlight:props.classsee}})
  }
    return (
        <div>
            <div className="container mt-0 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10">
                        <div className="row p-2 bg-white border rounded mt-2">
                            <div className="col-md-3 mt-1">
                            
                                <img className="img-fluid img-responsive rounded product-image " style={{height:"120px",width:"120px",marginLeft:"35px"}}  src={companyImage} alt='' />
                                
                                </div>
                            
                            <div className="col-md-2 mt-1">
                                <h5 style={{marginTop:"40px"}}></h5>
                                
                                <div className="d-flex flex-row">
                                    <div className="ratings mr-2">
                                        <i className="fa fa-clock"></i> 
                                    </div>
                                    <span>{props.flight.a.timeFlight}</span>
                                </div>
                               
                                <p className="text-justify text-truncate para mb-0">
                                     {props.flight.a.villeDepart} 
                                   <br /><br />
                                </p>
                            </div>
                            <div className="col-md-2 mt-1">
                                <h5>{props.flight.a.company}</h5>
                                < div className="ratingsFlight mr-2" style={{marginTop:"25px"}} >
                                     <i className="fa fa-plane-departure fa-2x" ></i> 
                                </div>
                            </div>
                            <div className="col-md-2 mt-1">
                            <h5 style={{marginTop:"40px"}}></h5>
                            <div className="d-flex flex-row">
                                    <div className="ratings mr-2">
                                        <i className="fa fa-clock"></i> 
                                    </div>
                                    <span>{props.flight.a.timeArrivee}</span>
                                </div>
                               
                                <p className="text-justify text-truncate para mb-0">
                                     {props.flight.a.villeArrivee} 
                                   <br /><br />
                                </p>
                                     
                            </div>
                            <div className="row p-2">
                            <div className="col-md-3 mt-1">
                            
                            <img className="img-fluid img-responsive rounded product-image " style={{height:"120px",width:"120px",marginLeft:"35px"}}  src={companyImage} alt='' />
                            
                            </div>
                        
                        <div className="col-md-2 mt-1">
                            <h5 style={{marginTop:"40px"}}></h5>
                            
                            <div className="d-flex flex-row">
                                <div className="ratings mr-2">
                                    <i className="fa fa-clock"></i> 
                                </div>
                                <span>{props.flight.r.timeFlight}</span>
                            </div>
                           
                            <p className="text-justify text-truncate para mb-0">
                                 {props.flight.r.villeDepart} 
                               <br /><br />
                            </p>
                        </div>
                        <div className="col-md-2 mt-1">
                            <h5>{props.flight.r.company}</h5>
                            < div className="ratingsFlight mr-2" style={{marginTop:"25px"}} >
                                 <i className="fa fa-plane-departure fa-2x" ></i> 
                            </div>
                        </div>
                        <div className="col-md-2 mt-1">
                        <h5 style={{marginTop:"40px"}}></h5>
                        <div className="d-flex flex-row">
                                <div className="ratings mr-2">
                                    <i className="fa fa-clock"></i> 
                                </div>
                                <span>{props.flight.r.timeArrivee}</span>
                            </div>
                           
                            <p className="text-justify text-truncate para mb-0">
                                 {props.flight.r.villeArrivee} 
                               <br /><br />
                            </p>
                                 
                        </div>
                        <div className="align-items-center align-content-center col-md-3 border-left mt-1" >
                            <div className="d-flex flex-row align-items-center" >
                                <h4 className="mr-1">{priceFlightA+priceFlightR}</h4>
                                <span className="strike-text">DH</span>
                            </div>
                            <h6 className="text-success">{props.flight.a.dateDeppart}<i className="fa fa-calendar-alt"></i>{props.flight.r.dateDeppart}</h6>
                            <div className="d-flex flex-column mt-2">
                                <button className="btn btn-outline-primary btn-sm mt-2" type="button" onClick={handelBuy}>Buy Ticket</button>
                            </div>
                        </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
