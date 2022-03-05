import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'
import vol from '../../images/vol/flight.jpg'
import tax from '../../images/vol/9.png'
import water from '../../images/vol/water.webp'
import { useAuth } from '../AuthContext'


function Cards()
{   
    const {loggedIn, role} = useAuth()
    console.log(loggedIn)
    console.log(role)
    console.log(localStorage.getItem("loggedIn"), typeof(localStorage.getItem("loggedIn")))
    return (
            <div>
                <div style={{height:60}}></div>
            <div className = 's1 py-5 hero mb-5'>
				<div className = 'container '>
					<div className = 'd d-flex flex-wrap justify-content-center' >

            <div className = 'b mb-5 text-center p-3 shadow rounded mx-2'>
                <img className = 'img-fluid mb-3' alt='' src={vol} />
                <p className = 'title'>Buy your plain ticket </p>
                <Link className = 'btn btn-outline-primary btn-sm text-capitalize' to ={'/ba/flights'}>pay now <i className="ms-2 fas fa-chevron-right"></i></Link>
                 </div>

            <div className = 'b mb-5 text-center p-3 shadow rounded mx-2'>
                <img className = 'img-fluid mb-3' alt='' src={tax} />
                <p className = 'title'>Pay your car taxes</p>
                <Link className = 'btn btn-outline-danger btn-sm text-capitalize' to={'/tva/matricule'} >
                    pay it now
                     <i className="ms-2 fas fa-chevron-right"></i>
                     </Link>
            </div>
            <div className = 'b mb-5 text-center p-3 shadow rounded mx-2'>
                <img className = 'img-fluid mb-3' alt='' src={water} />
                <p className = 'title'>Pay your Electricity and Water bills</p>
                <Link className = 'btn btn-outline-warning btn-sm text-capitalize' to = '/eauElectrecity/bils'>pay now <i className="ms-2 fas fa-chevron-right"></i></Link>
            </div>
           
            </div>
            </div>
            </div>
            <div style={{height:120}}></div>
            </div>
        )
    
}
export default Cards