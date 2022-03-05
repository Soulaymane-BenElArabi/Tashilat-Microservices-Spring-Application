import axios from 'axios';
import { useLocation } from "react-router";
import React, { useLayoutEffect , useState} from "react"
import { ipAddresses } from "../../shared/Data";
import { useNavigate } from 'react-router-dom';
export default function ClientForm(){
   const navigate = useNavigate();
    const location = useLocation();
    const [name, setname] = useState('')
    const [flight, setflight] = useState('')
    const [surname, setsurname] = useState('')
    const [email, setemail] = useState('')
    const [cin, setcin] = useState('')
    const [passport, setpassport] = useState('')
   
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' +dd ;

    
    const handleChangename=(event)=>{
      setname( event.target.value);
      
    }
    const handleChangesurname=(event)=>{
      setsurname( event.target.value);
      
    }
    const handleChangeemail=(event)=>{
      setemail( event.target.value);
      
    }
    const handleChangecin=(event)=>{
      setcin( event.target.value);
      
    }
    const handleChangepassport=(event)=>{
      setpassport( event.target.value);
      
    }
  /*    const handleSubmit=(event)=>{
      event.preventDefault();
      axios({
         url: `http://${ipAddresses[1].addresseIP}:${ipAddresses[1].port}/clients/save`,
         method: "POST",
         data:{'id':0,'passport':passport, 'cin':cin,'nom':surname,
         'prenom':name,'email':email}
       }).then(res=>{
         console.log("thanks god it's beutifuluy working"+res.data);

         const lovelyFlights = JSON.stringify(res.data);
         
     })
       .catch(error => console.log(error+" flight simple error"))

   } */
   const handleSubmit=(event)=>{
    event.preventDefault();
    axios({
       url: `http://${ipAddresses[2].addresseIP}:${ipAddresses[2].port}/tickets/save`,
       method: "POST",
       data:{'id':0,'dateAchat':today }
     }).then(res=>{
       console.log("thanks god it's beutifuluy working"+res.data);
       navigate('/ba/ticketFlight',{state:{flight:location.state.flight,typeflight:location.state.typeflight,classFlight:location.state.classFlight,
        firstname:name,surname:surname,cin:cin,passport:passport}})
       
   })
     .catch(error => console.log(error+" flight simple error"))
     console.log(today)
     
   
   

   }


    return(
       <div><div style={{height:"100px"}}></div>
      <div className="container"> <div className=" text-center mt-5 ">
        <h1>Get Your Flight Ticket</h1>
    </div>
    <div className="row ">
        <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
                <div className="card-body bg-light">
                    <div className="container">
                        <form id="contact-form" role="form" method='post' onSubmit={handleSubmit}>
                            <div className="controls">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group"> <label htmlFor="form_name">Firstname *</label> 
                                        <input id="form_name" type="text" value={name} onChange={handleChangename} name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group"> <label htmlFor="form_lastname">Lastname *</label> 
                                        <input id="form_lastname" type="text" value={surname} onChange={handleChangesurname} name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/> </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group"> <label htmlFor="form_email">Email *</label>
                                         <input id="form_email" type="email" value={email} onChange={handleChangeemail} name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group"> <label htmlFor="form_need">CIN *</label> 
                                        <input id="cin" type="text" value={cin} onChange={handleChangecin} name="cin" className="form-control" placeholder="Please enter your cin *" required="required" data-error="Valid email is required."/>
                                        </div>            
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group"> <label htmlFor="form_message">Passport *</label>
                                         <input id="passport" name="passport" value={passport} onChange={handleChangepassport} className="form-control" placeholder="Write your Passport number here." rows="4" required="required" data-error="Please, leave us a message."></input> </div>
                                    </div>
                                    
                                    <div className="col-md-12"> <input type="submit" className="btn btn-success btn-send pt-2 btn-block " value="Book Now"/> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</div>
<div style={{height:"115px"}}></div>

</div>
    )
}