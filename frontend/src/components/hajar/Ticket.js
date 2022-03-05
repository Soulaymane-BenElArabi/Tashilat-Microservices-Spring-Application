import { Component } from 'react'
import './ticket.css'
import water from '../../images/vol/water.webp'
import logo from '../../images/hajar/logo.png'
export function Ticket(props)  {
    var milliseconds = new Date().getTime();
    const timestamp = new Date().toLocaleString();
   console.log(props.nom);
   function ttest(e){
       console.log("props"+props.nom + " "+props.prenom+" "+props.adresse)
    console.log();
   }
    return (
             <div className="ticket" >
                <div className="ticket__content"> 
                    <div className="row">
                         <div className='col'>
                             <img className = 'test'  src={logo}></img>
                         </div>
                        <div className='d-flex justify-content-end'>
                             <img className = 'test2'  src={water}></img>
                        </div>   
                    </div>
                    <div className='d-flex justify-content-center'>
                         <h6>{props.titre} </h6>
                    </div>
                    <div  id="label">
                    <div className='row'>
                        <div className='col'  >
                            <label>first name : </label><br/>
                            <label>last name :</label><br/>  
                            <label>client login:</label><br/>
                        </div>
                        <div className='col'>
                            <label>{props.nom}</label><br/>
                            <label> {props.prenom}</label><br/>
                            <label>{milliseconds}{props.id}</label><br/>
                        </div>
                        <label> Adress :  {props.adresse}</label><br/>
                 </div>
                 <div className="d-flex justify-content-center">
                       <label>---------------------------------------</label><br/>
                 </div>
                 <div className="d-flex justify-content-center">
                    <table className="table">
                        <tr>
                            <th>Code agence</th>
                            <th>Mounth</th>
                            <th>Amount</th>
                        </tr>
                    
                        <tr>
                        <td>2029</td>
                        <td>{props.mounth}</td>
                        <td>{props.amount} DH</td>
                        </tr>
                    
                    </table><br/>
                    
                 </div>
                    
                    <div className="d-flex justify-content-center">
                        <label>---------------------------------------</label><br/>
                    </div>
                  
                    <label>*Payment fees : 1DH</label><br/>
                    <label>*Total costs: {props.amount + 1}DH</label><br/>
                    <div className="d-flex justify-content-center" >
                        <label id="footer"> {timestamp}</label><br/>
                    </div>
                    
                
                </div>
            </div>
          </div>
          
        )
    
}