import axios from 'axios'; 
import './SearchFlight.css'
import React from 'react'
import flight from '../../../images/vol/flight.jpg'
import {ipAddresses} from '../../shared/Data.js'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SearchFlight = ()=>{
   
  
  const navigate = useNavigate();
  const [dateDeppart,setDateD] =  useState('')
  const [dateArrivee, setdateArrivee] = useState('')
  const [villeDepart, setvilleDepart] = useState('')
  const [villeArrivee, setvilleArrivee] = useState('')
  const [nbrPlaces, setnbrPlaces] = useState('') 
  const [typeTrip, settypeTrip] = useState('')
  const [classeFlight, setclasseFlight] = useState('')
        
              
   
    
    
  const handleClickSimple =()=> {
        document.getElementById("retour").hidden=true;
        settypeTrip('simple');
        console.log('haa'+typeTrip)
      }
    const  handleClickRound =()=> {
        document.getElementById("retour").hidden=false;
        settypeTrip('round') ;
        console.log('haa'+typeTrip)
      }
     const handleChangeVDeppart =(event)=> {
        setvilleDepart(event.target.value);
        console.log("jhk"+villeDepart)
      }
       
     const handleSubmit=(event)=>{
        event.preventDefault();
      
        if (typeTrip=='simple')
        {
          axios({
            url: `http://${ipAddresses[2].addresseIP}:${ipAddresses[2].port}/flights/yarbi`,
            method: "POST",
            data:{'id':0,'dateDeppart':dateDeppart, 'dateArrivee':dateArrivee,'villeDepart':villeDepart,
            'villeArrivee':villeArrivee,'nbrPlaces':nbrPlaces,'placeDispo':12,'class':classeFlight}
          }).then(res=>{
            console.log("thanks god it's beutifuluy working"+res.data);

            const lovelyFlights = JSON.stringify(res.data);
            navigate('/ba/flightsDispo',{state:{flights:lovelyFlights,typeflight:'simple',classFlight:classeFlight}})
        })
          .catch(error => console.log(error+" flight simple error"))
         
        }
         else{
          axios({
            url: "http://"+ipAddresses[2].addresseIP+":"+ipAddresses[2].port+"/flights/flightsDispoRound",
            method: "POST",
            data:{'id':0,'dateDeppart':dateDeppart, 'dateArrivee':dateArrivee,'villeDepart':villeDepart,
            'villeArrivee':villeArrivee,'nbrPlaces':nbrPlaces,'placeDispo':12,'class':classeFlight}
          }).then(res=>{
            const lovelyFlights = JSON.stringify(res.data);
            console.log(lovelyFlights)
            navigate('/ba/flightsDispo',{state:{flights:lovelyFlights,typeflight:'round',classFlight:classeFlight}})
        }).catch(error => console.log(error+" shit"))
         
         }
      }
      const handleChangeVArrivee=(event)=> {
        setvilleArrivee(event.target.value);
      }
      const handleChangeDArrivee=(event)=> {
        setdateArrivee( event.target.value);
      }
      const handleChangeDDeppart=(event)=> {
        setDateD( event.target.value);
      }
      const handleChangeNPlaces=(event)=>{
        setnbrPlaces( event.target.value);
      }
      const handleChangeClasse=(event)=>{
        setnbrPlaces( event.target.value);
      }
      const handleClassFlightChange = (e)=>{
        setclasseFlight(e.target.value)
        console.log(e.target.value)
      }
    
  
      return(
				
            <div className='jasmine-form '>
        <form method='post' onSubmit={handleSubmit}>
            <div className="form-icon">
               <img className = 'img-fluid mb-3' alt='' src={flight} />
            </div>
            <div className="form-group">
            <div className='btn-group bgrp' role="group" aria-label="Basic example">
                 <button type="button" className="m-2 btn btnaller" onClick={handleClickSimple}>One way Trip</button>
                <button type="button" className="m-2 btn btnaller" onClick={handleClickRound}>Round Trip</button>
             </div>
             </div>
             <br/>
            <div className="form-group">
                <input type="text" className="form-control item" name='villeDepart' id="vDeppart" value={villeDepart} onChange={handleChangeVDeppart} placeholder="From city or airport"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" name='villeArrivee' id="vArrivee" value={villeArrivee} onChange={handleChangeVArrivee} placeholder="To city or airport"/>
            </div>
            <div className="form-group">
                <input type="date" className="form-control item" name='dateDeppart' id="dDeppart" value={dateDeppart} onChange={handleChangeDDeppart} placeholder="deppart"/>
            </div>
            <div className="form-group">
                <input type="date" className="form-control item" name='dateArrivee' value={dateArrivee} onChange={handleChangeDArrivee} id="retour" placeholder="retour"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" name='nbrPlaces' value={nbrPlaces} onChange={handleChangeNPlaces} id="nbr" placeholder="nbr Passager"/>
            </div>
            <select className="form-control item" name="classeFlight" onChange={handleClassFlightChange} id="classeFlight">
                  <option value="" disabled selected>ClasseFlight</option>
                  <option value="1rst_classe">1rst Classe</option>
                  <option value="Buisness">Buisness</option>
                  <option value="economic">Economic</option>
                  
            </select>
            <div className="form-group">
                <button type='submit' className="btn btn-block create-account btn-lg" > Search</button>
            </div>
        </form>
        
    </div>
    
    
    );

}
export default SearchFlight