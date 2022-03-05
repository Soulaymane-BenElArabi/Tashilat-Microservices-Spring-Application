import  React, {useState} from 'react'
import './ticket.css'
import { useLocation } from 'react-router'
import ensajlogo from '../../../images/tva/ticket/ensaj.png'
import taxlogo from '../../../images/tva/ticket/9.png'
import MyTimeline from '../timeline/Timeline'


export function TicketTva(props)  {
    var milliseconds = new Date().getTime();
    const timestamp = new Date().toLocaleString();
    const location = useLocation()

    // a var to get the bill infos from location
    const [bill, setBill] = useState(location.state.billInfos)

    const print =()=>{
        window.print()
    }
    onbeforeprint =function(){
        document.getElementById("myTvaId").style.visibility = "hidden";
        document.getElementById("rowContainerDiv").style.visibility = "visible";
        document.getElementById("rowContainerDiv").style.zoom = "2";
        document.getElementById("rowContainerDiv").style.marginTop = "-270px";
        document.getElementById("rowContainerDiv").style.marginLeft = "-35px";
    }
    onafterprint = function(){
        document.getElementById("myTvaId").style.visibility = "visible";
        document.getElementById("rowContainerDiv").style.zoom = "0";
        document.getElementById("rowContainerDiv").style.marginTop = "1px";
        document.getElementById("rowContainerDiv").style.marginLeft = "1px";
    }
    
    return (
        <div>
            <div  style={{height:90}}></div>
            <div className='container'>
                <MyTimeline choice={"element3"} />
            </div>
            
            <div id='rowContainerDiv'  >
                <div className="ticket pt-1" >
                    
                    <div className="ticket__content"> 
                        <div className="row">
                            <div className='col'>
                            <img className = 'test p-3' src={ensajlogo} alt=''></img>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <img className = 'test2'  src={taxlogo} alt=''></img>
                            </div>   
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h6>Vehicule Payment infos </h6>
                        </div>
                        <div id="label">
                            <div className='row'>
                                <div className='col'  >
                                    <label>First name : </label><br/>
                                    <label>Last name :</label><br/>  
                                    <label>Bill n:</label><br/>
                                    <label>Vehicule register:</label><br/>
                                </div>
                                <div className='col text-primary'>
                                    <label>{bill.owner == null ? "Ben El Arabi" : bill.owner.nom }</label><br/>
                                    <label> {bill.owner == null ? "Soulaymane" : bill.owner.prenom }</label><br/>
                                    <label>{milliseconds}-{bill.owner == null ? "1" : bill.owner.id }</label><br/>
                                    <label> {bill.matricule}</label><br/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                            <label>---------------------------------------</label><br/>
                            </div>
                            <div className="d-flex justify-content-center">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th>Transaction</th>
                                            <th>Vehicule Type</th>
                                            <th>Amount</th>
                                        </tr>
                                        <tr>
                                            <td>{bill.owner == null ? "UY980PO0" : bill.owner.cin+""+bill.owner.id }</td>
                                            <td>{bill.nom}</td>
                                            <td>{bill.amount} DH</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br/>
                            </div>
                            <label>
                                Agency code : 2290
                            </label>
                            <br/>
                            <div className="d-flex justify-content-center">
                                <label>---------------------------------------</label><br/>
                            </div>
                            <label>
                                <span className='text-danger'>*</span> Payment fees : 1DH
                            </label>
                            <br/>
                            <label><span className='text-danger'>*</span> Total : {bill.amount + 1}DH</label><br/>
                            <div className="d-flex justify-content-center" >
                                <br /> <label > {timestamp}</label><br/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <button className='btn center-btn mt-2' style={{backgroundColor:"#81d4fa"}} onClick={print} >Print</button>
            <div className='mb-5' style={{height:"20px"}}></div>
        </div>    
    )
    


}