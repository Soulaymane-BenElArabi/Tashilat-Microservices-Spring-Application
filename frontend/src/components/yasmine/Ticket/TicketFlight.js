import { useLocation } from "react-router";
import React, { useLayoutEffect , useState} from "react"
import './TicketFlight.css'
import backgoundFlight from '../../../images/vol/background.jpg'

export default function TicketFlight(){
    
    const location = useLocation();
    const [villeD,setvilleD] = useState('')
	const [villeA,setvilleA] = useState('')
	const [dateD,setdateD] = useState('')
	const [dateR,setdateR] = useState('')
	const [dateA,setdateA] = useState('')
    useLayoutEffect(() => {
        if (location.state.typeflight=='round') {
       
            document.getElementById("returning").hidden=false;
			setvilleD(location.state.flight.a.villeDepart);
			setvilleA(location.state.flight.a.villeArrivee);
			setdateD(location.state.flight.a.dateDeppart);
			setdateR(location.state.flight.r.dateDeppart);
        }
        else if(location.state.typeflight=='simple'){
            document.getElementById("returning").hidden=true;
			document.getElementById("returning11").hidden=true;
			document.getElementById("passport").style.marginTop="-100px"
			
			setvilleD(location.state.flight.villeDepart);
			setvilleA(location.state.flight.villeArrivee);
			setdateD(location.state.flight.dateDeppart);
        }
     },[]); 
   
     const print =()=>{
        window.print()
    }
    onbeforeprint =function(){
        console.log("before")
        
        document.getElementById("myTvaId").style.visibility = "hidden";
		document.getElementById("flightTicket").style.visibility = "visible";
		document.getElementById("buttonTicket").style.visibility = "hidden";
		document.getElementById("flightTicket").style.zoom = "1.4";
		document.getElementById("flightTicket").style.width="1000px";
		document.getElementById("flightTicket").style.marginLeft="-150px"
		document.getElementById("flightTicket").style.marginTop="-200px"

    }
    onafterprint = function(){
        console.log("after") 
		document.getElementById("myTvaId").style.visibility = "visible";
        document.getElementById("buttonTicket").style.visibility = "visible";
		document.getElementById("flightTicket").style.width="1100px";
		document.getElementById("flightTicket").style.marginLeft="80px";
		document.getElementById("flightTicket").style.marginTop="0px";
		document.getElementById("flightTicket").style.zoom = "0";
    }


    return(

        <div id="booking" className="section" >
		<div className="section-center">
                
			<div className="container">
			<div className="form-btn booking-soulaymane" >
					<button className="submit-btn" id="buttonTicket" onClick={print}>Print Ticket</button>
				</div>
				<div className="row" id="flightTicket">
                
				<div className="booking-form" >
						<form id="flightTicket">
                                    
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label">Flying from</span>
										<input className="form-control" value={villeD} type="text" placeholder="City or airport"/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label">Flyning to</span>
										<input className="form-control" value={villeA} type="text" placeholder="City or airport"/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-3">
									<div className="form-group">
										<span className="form-label">Departing</span>
										<input className="form-control" value={dateD} type="text" required/>
									</div>
								</div>
								<div className="col-md-3">
									<div className="form-group">
										<span className="form-label" id= "returning11" >Returning</span>
										<input className="form-control" value={dateR} id= "returning" type="text" required/>
									</div>
								</div>
								<div className="col-md-3">
									<div className="form-group">
										<span className="form-label">passenger Full Name</span>
										<input className="form-control" type="text" value={location.state.firstname+" "+location.state.surname} placeholder="passenger Last And First Name"/>
										<span className="select-arrow"></span>
									</div>
								</div>
                                <div className="col-md-2">
									<div className="form-group">
										<span className="form-label">CIN</span>
                                          <input className="form-control" value={location.state.cin}  type="text" placeholder="CIN"/>
										<span className="select-arrow"></span>
									</div>
								</div>
								
							</div>
							<div className="row">
								<div className="col-md-3">
									<div className="form-group">
										<span className="form-label">Travel className</span>
										<input className="form-control" value={location.state.classFlight} type="text" placeholder="className"/>
										<span className="select-arrow"></span>
									</div>
								</div>
								<div className="col-md-3">
									<div className="form-group">
                                    <span className="form-label" id="passport">N° Passport</span>
										<input className="form-control" id="passport" value={location.state.passport} type="text" placeholder="N° Passport"/>
										<span className="select-arrow"></span>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}