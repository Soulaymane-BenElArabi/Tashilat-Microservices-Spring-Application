import React,{useLayoutEffect, useState} from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MyCard.css'
import logo from '../../../images/tva/matricule/logo2.jfif'
import {ipAddresses} from "../../shared/Data"


export default function MyCard(props) {
    toast.configure()
    const toastId = React.useRef(null);
    const [bill, setBill] = useState([])
    const [billState, setBillState] = useState(false)
    const [dateUpdate, setDateUpdate ] = useState("")
    const navigate = useNavigate()
    
    useLayoutEffect(()=>{
       setBill(props.vehiculeBill)
       if(bill.factureState === true){
           setBillState(true)
       }else{
        setBillState(false)
       }
       
    }, [props.vehiculeBill, bill.factureState])
    // handle click on print button
    const handlePrintClick = (event)=>{
        navigate("/tva/ticket",{state:{billInfos:bill}})
    }
    // show the succes toast
    const successToast = () => {
        if(!toast.isActive(toastId.current)) {
            toastId.current = toast.success('Taxes was payed successfuly do u want a receipt?',
                {
                    theme: "colored",
                    position : toast.POSITION.BOTTOM_CENTER,
                    autoClose:2000
                }
            )
        }
    }
    const errorToast = () => {
        if(!toast.isActive(toastId.current)) {
            toastId.current = toast.success('An error has occured try later',
                {
                    position : toast.POSITION.BOTTOM_CENTER,
                    autoClose:1500
                }
            )
        }
    }
    const handleChange = (event) =>{
        setDateUpdate(event.target.value)
    }
    const updateBillState =  () => { 
        
            axios({
                url: `http://${ipAddresses[0].addresseIP}:8043/vehicules/updateBill/${bill.matricule}/${dateUpdate}`,
                method: "GET"
            }).then((res) =>{
                const responseText = res.data
                switch (responseText) {
                    case -1:
                        console.log("An error has occured try later")
                        errorToast()
                        break;
                    case 1:
                        console.log("Taxes was payed successfuly wanna a receipt")
                        successToast()
                        break;
                    default:
                        console.log(typeof(responseText)+"" +responseText)
                        break;
                }
            }).catch((error) => {
                 console.log(error+" salim")
            }) 
        
        
     };
    const handleSubmit = (event) =>{
        event.preventDefault()
        updateBillState()
    }
    return (
        <div>
            
            {/* if bill was defined */}
                <div className="container mt-0 mb-5">
                <div className="d-flex justify-content-center row">
                    
                    <div className="col-md-10">
                        <div className="row p-2 bg-white border rounded mt-2">
                            <div className="col-md-3 mt-1">
                                <img className="img-fluid img-responsive rounded product-image" src={logo} alt='' />
                            </div>
                            <div className="col-md-6 mt-1">
                                <h5>{bill.nom}-{bill.matricule}</h5>
                                <div className="d-flex flex-row">
                                    <div className="ratings mr-2">
                                        <i className="fa fa-star"></i> 
                                    </div>
                                    <span style={{textTransform: "capitalize"}} >{bill.typeCarburant}</span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                    <span>{bill.kilometrage} kms</span>
                                    <span className="dot"></span>
                                    <span>{bill.age} yo</span>
                                    <span className="dot"></span>
                                </div>
                                <p className="text-justify text-truncate para mb-0">
                                     You pay the bill by updating its state and selecting the <br /> time of update to keep tracability!
                                   <br /><br />
                                </p>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                    <h4 className="mr-1">{bill.amount}</h4>
                                    <span className="strike-text">DH</span>
                                </div>
                                <h6 className="text-success">+5% on every late week! </h6>
                                
                                {billState ?
                                 <div className="d-flex flex-column mt-2">
                                    
                                 <label name="" className="btn btn-outline-warning btn-sm mt-2"  >Already Payed </label>
                              
                                  <button style={{backgroundColor:"#00E676"}} onClick={handlePrintClick} className="btn mt-2 btn-lg btn-sm" type="submit">Print the Ticket</button>
                               </div>
                                 : <form className="d-flex flex-column mt-2" onSubmit={handleSubmit}>
                                    
                                    <input name="updateDate" type="date" 
                                    placeholder="Update Date" onChange={handleChange} required
                                     className="btn btn-outline-primary btn-sm mt-2"  />
                                 
                                     <button style={{backgroundColor:"#FDD835"}} className="btn mt-2 btn-lg btn-sm" type="submit">Pay It</button>
                                  </form> }
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
