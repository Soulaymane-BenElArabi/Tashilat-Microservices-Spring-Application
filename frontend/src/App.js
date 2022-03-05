
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbarPublic/navbar/Navbar'
import Footer from './components/footer/Footer'
import Landing from './components/landing/Landing'
import About from './components/about/About'
import Login from './components/authentification/login/Login'
import Sb from './components/scrollbtn/Sb'
import Cards from './components/tabs/Cards'
import Notfound from './components/notfound/Notfound'
import SearchMatricule from './components/tva/matricule/SearchMatricule'
import ResultTva from './components/tva/result/result'
import { TicketTva } from './components/tva/ticket/TicketTva'
import { useAuth } from './components/AuthContext'
import NavbarClient from './components/navbarClient/NavbarClient'
import Logout from './components/authentification/logout/Logout'
import NavbarAdmin from './components/navbarAdmin/NavbarAdmin'
import AllUsers from './components/administration/users/AllUsers'
import AddUser from './components/administration/addUser/AddUser'
import Stats from './components/administration/statistics/Stats'
import SearchFlight from './components/yasmine/BAmicroservice/SearchFlight'
import FlightsDispo from './components/yasmine/FlightsDispo/FlightsDispo'
import CardSimple from './components/yasmine/cards/CardSimple/CardSimple'
import ClientForm from './components/yasmine/ClientForm/ClientForm'
import TicketFlight from './components/yasmine/Ticket/TicketFlight'
import Water from './components/hajar/Water'
import Bils from './components/hajar/Bils'
import  Electrecity  from './components/hajar/Electrecity'
import {Ticket} from './components/hajar/Ticket'

function App()
{
  const {loggedIn, role} =useAuth()
  const display_right_navbar = _ =>
    {
      if(loggedIn && role==="admin"){
        return (
          <NavbarAdmin />
        )
      }else if(loggedIn && role==="client"){
        return (
          <NavbarClient />
        )
      }else{
        return(
          <Navbar />
        )
      }
        
    }
    
  return (
          <BrowserRouter>
            <>
              <Sb />
              <div className = '_navbar'>
                   {display_right_navbar()}
              </div>  

              <div className = '_body'>
                
                  <Routes>
                        <Route exact path = '/' element = {<Landing />} />
                        
                        <Route path = '/about' element = {<About />} />
                        <Route path ='/login' element={<Login />} />
                        <Route path ='/cards' element={<Cards />} />
                        
                        <Route path = '*' element = {<Notfound />} /> 

                        {/* soulaymane */}
                        <Route path = '/tva/matricule' element = {<SearchMatricule />} />
                        <Route path = '/tva/result' element = {<ResultTva />} />
                        <Route path = '/tva/ticket' element = {<TicketTva />} />
                        <Route path = '/login' element = {<Login />} /> 
                        <Route path = '/logout' element = {<Logout />} /> 
                        <Route path = '/users' element = {<AllUsers />} />
                        <Route path = '/addUser' element = {<AddUser />} />
                        <Route path = '/stats' element = {<Stats />} /> 

                        {/* yasmine */}
                        <Route path ='/ba/flights' element={<SearchFlight />} />
                        <Route path ='/ba/flightsDispo' element={<FlightsDispo />} />
                        <Route path ='/ba/test' element={<CardSimple />} />
                        <Route path ='/ba/user' element={<ClientForm/>} />
                        <Route path ='/ba/ticketFlight' element={<TicketFlight/>} />

                        {/* hajar */}
                        <Route path ='/eauElectrecity/bils' element={<Bils />} /> 
                       <Route path ='/eauElectrecity/waterBils' element={<Water />} />
            
                        <Route path='/eauElectrecity/electrecityBils' element={<Electrecity/>}/>
                        <Route path='/eauElectrecity/ticket' element={<Ticket/>}/>
                        
                        
                  </Routes>
              </div>

              <div className = '_footer'>
                <Footer />
              </div>
            
            </>
          </BrowserRouter>
        )
    
}
export default App
