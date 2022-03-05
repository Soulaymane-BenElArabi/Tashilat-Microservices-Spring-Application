import React, { useLayoutEffect , useState} from "react"
import { useLocation } from "react-router";
import Notfound from "../../notfound/Notfound.js";
import CardRound from "../cards/CardRound/CardRound.js";
import CardSimple from "../cards/CardSimple/CardSimple.js";


const FlightsDispo = ()=>{
    const location = useLocation();
    const [res, setRes] = useState([])
    const [typeFlight,setTypeFlight] = useState('')
	const [classeFlight,setclasseFlight] = useState('')
	const [priceFlight,setpriceFlight] = useState(0)
	const [resState,setResState] = useState(false)
	const [simple,setSimple] = useState(false)
	const [round,setRound] = useState(false)

    useLayoutEffect(() => {
       
       setRes(JSON.parse(location.state.flights));
	   
	   //console.log(resState)
	   setTypeFlight(location.state.typeflight);
	   // set the var u want here]
	   /* if (typeFlight=='simple') {
		setSimple(true)
	   }else if(typeFlight=='round'){
		   setRound(true)
	   } */
	   setclasseFlight(location.state.classFlight);
    },[]); 
	// resState true => no flight
	// depending on the flight type we show either a simple or card card
	//()=>setResState(res==null)
	if(res.length==0){
		
		return (
			
			<Notfound  flight={'NO FLIGHTS DISPO'} />
			
		)
	}else{
		console.log("it should be false"+res==null)
		if (typeFlight=='simple') {
			return(
				<div><div style={{height:"190px"}}></div>
					{res.map(flight =>
					{
						return  <CardSimple flight= {flight} classsee={classeFlight} />})
					}

					<div style={{height:"190px"}}></div>
				</div>
			)
			
		}else{
			return(
				<div>
					<div style={{height:"190px"}}></div>
						{res.map(flight =>
								{
						return  <CardRound flight= {flight} classsee={classeFlight} />})
					}
					
					<div style={{height:"190px"}}></div>
				</div>
			)
		}
	}
 	
    
}
export default FlightsDispo