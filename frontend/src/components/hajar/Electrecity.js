import React, { Component, useState, useLayoutEffect, useRef } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom'
import { ipAddresses } from '../shared/Data'
import Chart from 'chart.js/auto'
import { Bar,getElementAtEvent} from 'react-chartjs-2';
import axios from 'axios';
import './Water.css'
import { useEffect } from 'react/cjs/react.development';
import buttonligth from '../../images/hajar/buttonligth.png'
import { Ticket } from './Ticket';

export default function Electrecity() { 
  if(localStorage.getItem("counterelec")=="null" || localStorage.getItem("counterelec")=="NaN" ){
    localStorage.setItem("counterelec", 0)
  }
  const locationelectric = useLocation()
  const [nom, setnom] = useState('')
  const [prenom, setprenom] = useState('')
  const [adresse, setadresse] = useState('')
    const [mounth, setmounth] = useState('');
    const [etatpay, setetatpay] = useState('');
    const [kwConsomme, setkwConsomme] = useState('');
    const [amount, setamount] = useState('')
    const [yearelectric, setelectric] = useState(2022)
    const [date, setdate] = useState('Null')
    const [refelectrecity, setrefelectrecity] = useState(locationelectric.state.referencElectrecity)
    const [compteur, setcompteur] = useState(1)
    toast.configure()
    const myrefelectric = useRef()

    
    
  const toastId = React.useRef(null);
    const [chartData,setCharData] = useState({
        labels: [],
        datasets:[{}]
      })
      toast.configure()
      const nav = useNavigate()

      const print=()=>{
    
        window.print()
    }
    onafterprint = function () {
      window.location.reload(false);
      document.getElementById("ticketshow").style.display = "none";
     // window.location.href = "/cards";
    }
    onbeforeprint = function(){
     
    document.getElementById("rowContainerDiv").style.display = "none";  
    document.getElementById("ticketshow").style.display = "";
    document.getElementById("ticketshow").style.zoom = "2";
    document.getElementById("ticketshow").style.marginTop = "-150px";
    document.getElementById("ticketshow").style.marginLeft = "-25px";
    
    }
    const total = ()=>{
      axios({
          url:"http://"+ipAddresses[1].addresseIP+":8080/Facture/allelec/"+refelectrecity,
          method:'GET',
      }).then(res=>{const response = res.data
          console.log("jhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"+response)
      setnom(response[0][0])
      setprenom(response[0][1])
      setadresse(response[0][2])
      setcompteur(compteur+1)
     
  
      }).catch(error => console.log(" hajar :  in catch when retreiving data from api"+error))
  }
      const senddate=(event)=>{
        setdate(event.target.value)
      }
      const changeyearelectric=(event)=>{
        setelectric(event.target.value)    
    }
    function submitelectric() {
        
        fillChart()

    }

    useEffect(() => {
        fillChart()
        return () => {
            console.log("testinfg cchart")
        };

    }, []) 

    const fillChart = () =>{
        axios({
            url: "http://"+ipAddresses[1].addresseIP+":8080/MouthElectrecity/FactureContrat/"+refelectrecity+"/"+yearelectric, 
           method: "GET",
          // data:{'ref':1}//this.state.password
         }).then(res=>{
             console.log("test")
             const response = res.data
             if(response.length == 0){
                 console.log(refelectrecity)
                //  console.log(refeau)
                    if(!toast.isActive(toastId.current)) {
                       toastId.current = toast.error(
                         'Invalid reference',
                         {theme:'colored',
                         position : toast.POSITION.TOP_CENTER,
                         autoClose:2000})
                     }
                   
                  
                   
                   setTimeout(()=> {
                      nav('/eauElectrecity/Bils');
                      }, 2000);
                  
               }
               else{
               console.log(response)
               var arraye = []
               var colors = [];
               var borders = []
               var labels = []
                for(var i =0;i< response.length;i++){
                   var test = {}
                   console.log(test)
                    test.x = response[i].mouth
                    test.y = response[i].amount
                    arraye.push(test)

                    switch(response[i].mouth) {
                        case 1:
                            labels.push("January")
                          break;
                        case 2:
                            labels.push("February")
                          break;
                          case 3:
                            labels.push("March")
                          break;
                        case 4:
                            labels.push("April")
                          break;
                          case 5:
                            labels.push("May")
                          break;
                        case 6:
                            labels.push("June")
                          break;
                          case 7:
                            labels.push("July")
                          break;
                        case 8:
                            labels.push("August")
                          break;
                          case 9:
                            labels.push("September")
                          break;
                        case 10:
                            labels.push("October")
                          break;
                          case 11:
                            labels.push("November")
                          break;
                        case 12:
                            labels.push("December")
                          break;
                    
                        
                      }
    
                    
                    
                    console.log("maping chart "+test)
                    if(response[i].etatPay == 0){
                      colors.push('rgba(255, 99, 132, 0.2)' )
                      borders.push('rgb(255, 99, 132)')
                    }else if(response[i].etatPay == 1){
                       colors.push('rgba(255, 205, 86, 0.2)')
                       borders.push( 'rgb(255, 205, 86)' )
                    }
                    console.log("colors"+colors)
                   
                   
               }
             
              
                setCharData(
                   {
                             labels : labels,
                             datasets: [
                           {
                            barPercentage: 0.95,
                            categoryPercentage: 0.95,
                               label: 'Mounth bills ',
                               data: arraye,
                               backgroundColor: colors, //[,'rgba(99, 255, 132, 0.5)'   ]    
                               borderColor : borders,      
                               borderWidth : 2
                           }
                       ]
                   }
     
                 ) 
               }
         }).catch(error=>console.log("in catch : error whaile retreiving"+error))
    }
   const handleClickWater= (event)=>{
 
    var test = getElementAtEvent(myrefelectric.current, event)
    try{
        console.log(test[0].element.$context.raw.x)
        axios({
           url: "http://"+ipAddresses[1].addresseIP+":8080/MouthElectrecity/FactureDatails/"+test[0].element.$context.raw.x+"/"+refelectrecity+"/"+yearelectric,
           method: "GET",
         // data:{'ref':1}//this.state.password
         }).then(res =>{
       
          
           const response = res.data;
           console.log(response)
           document.getElementById("formhada").style.display = "initial";  
           document.getElementById("chart").classList.remove("col-10");
           document.getElementById("chart").classList.add("col-8");
           document.getElementById("flexcenter").classList.remove("justify-content-center");
          
           
           switch(response[0].mouth) {
               case 1:
                   setmounth("January")
                 break;
               case 2:
                   setmounth("February")
                 break;
                 case 3:
                   setmounth("March")
                 break;
               case 4:
                   setmounth("April")
                 break;
                 case 5:
                   setmounth("May")
                 break;
               case 6:
                   setmounth("June")
                 break;
                 case 7:
                   setmounth("July")
                 break;
               case 8:
                   setmounth("August")
                 break;
                 case 9:
                   setmounth("September")
                 break;
               case 10:
                   setmounth("October")
                 break;
                 case 11:
                   setmounth("November")
                 break;
               case 12:
                   setmounth("December")
                 break;
           
               
             }
             switch(response[0].etatPay){
                 case true:
                     setetatpay("payed")
                     break;
                     case false:
                       setetatpay("not yet payed")
                       break;
               }
          
           setkwConsomme(response[0].kwConsomme)
           setamount(response[0].amount)
       
       })

    }catch(error){console.log(error)}
  

}

const cntelec =()=>{
  var count=parseInt(localStorage.getItem("counterelec"))
      count = count+1
      localStorage.setItem("counterelec",count)
      
}
const updatePayelectric =()=>{
  document.getElementById("printelectric").style.display = "";
 total()
 cntelec()
    console.log({mounth}.mounth)
    var mois;
    switch({mounth}.mounth) {
      case "January":
          mois = 1
        break;
      case "February":
        mois = 2
        break;
        case "March":
          mois = 3
        break;
      case "April":
        mois = 4
          
        break;
        case "May":
          mois = 5
         
        break;
      case "June":
         mois=6
        break;
        case "July":
          mois=7
         
        break;
      case "August":
        mois=8
          
        break;
        case "September":
          mois=9
         
        break;
      case "October":
        mois=10
          
        break;
        case "November":
          mois=11
        break;
      case "December":
        mois=12
        break;
    }
    if({etatpay}.etatpay == "not yet payed"){
      
      
        if(date != "Null"){
          axios({
            url: "http://"+ipAddresses[1].addresseIP+":8080/MouthElectrecity/pay/"+mois+"/"+refelectrecity+"/"+yearelectric+"/"+senddate,
            method: "GET",
          }).then(res=>{ ///toast.POSITION.TOP_RIGHT  POSITION.TOP_CENTER  POSITION.BOTTOM_LEFT
       const response = res.data
       console.log("etat paaaaaaaaaaaaaaayment"+response)
               if(response){
                   
             if(!toast.isActive(toastId.current)) {
                toastId.current =  toast.success('bils payed successfult',{theme:'colored',position : toast.POSITION.TOP_LEFT,autoClose:2000}) //false
                fillChart()  
            }
               }else if(!response){
               if(!toast.isActive(toastId.current)) {
                    toastId.current =  toast.error('bils of last mounth not payed yet  ',{theme:'colored',position : toast.POSITION.TOP_LEFT,autoClose:2000}) //false
                  }
               }          
      
              }).catch(error => console.log(" hajar :  in catch when retreiving data from api"+error))
        }else{
          if(!toast.isActive(toastId.current)) {
            toastId.current =  toast.warning('DATE FIELD IS EMPTY ',{theme:'colored',position : toast.POSITION.TOP_LEFT,autoClose:2000}) //false
          
          }
        }
      
        
    }else{
         if(!toast.isActive(toastId.current)) {
            toastId.current =  toast.warning('bils is already payed',{theme:'colored',position : toast.POSITION.TOP_LEFT,autoClose:2000})
          }
        
    }
    

}







    return (
        <div className="container" >
          <div style={{height:"40px"}}>

          </div>
             <div className="row" id="rowContainerDiv">
                 <div className='d-flex justify-content-center' id="flexcenter">
             <div  className="col-10" id="chart">
               
                    <div className='d-flex flex-row-start'>
                         <div className="col-auto">
                        
                        <div className="input-group mb-2">
                        <input type="image" className="btn" id="imgbutton" src={buttonligth}  htmlFor="yearschoice" onClick={submitelectric}/>
                            <div className="col-2">
                            <div className="group">      
                            <input list="years" onChange={changeyearelectric} value={yearelectric} className='inputyear'  placeholder='year' id="yearschoice" />
                                        <span className="highlight"></span>
                                        <div className="bar"></div>
                                        
                                    </div>
                            
                                 <datalist id="years">
                                    <option>2022</option>
                                    <option>2021</option>
                                    <option>2020</option>
                                 </datalist>
                            </div>
                         </div>
                     </div>
                             
                            
                        
                        
                    </div>
                   
                   
                    <Bar
                   ref={myrefelectric}
                    data={chartData}
                   onClick={handleClickWater}
                    options={{ 
                        responsive: true,
                        scales: {
                            y: {
                                display: true,
                                title: {
                                display: true,
                                text: 'amounth DH',
                                color: '#D77FA1',
                                font: {
                                    family: 'Comic Sans MS',
                                    size: 20,
                                    weight: 'bold',
                                    lineHeight: 1.2,
                                    margin:{right:-200},
                                },
                               
                               
                                }
                            }
                        }
                        
                    }} 
                    
                    />
                 </div>
                
                 <div className="col-4" id="formhada"  style={{display:"none"}}>
                    <div className="registration-form">
                    <div className='d-flex justify-content-center'>
                             <label className='btn btn-outline-primary'>Number of payments : {localStorage.getItem("counterelec")}</label><br/>
                          </div>
                         <form>
                            <div className="groupelec">      
                                        <input type="text" className='inputelec' required value={mounth}  placeholder="mounth" readOnly/>
                                        <span className="highlightelec"></span>
                                        <div className="barelec"></div>
                                        <label className='labelelec'>Mounth</label>
                                    </div>
                                    <div className="groupelec">      
                                        <input className='inputelec' type="text" required value={amount}  placeholder="amount" readOnly/>
                                        <span className="highlightelec"></span>
                                        <div className="barelec"></div>
                                        <label className='labelelec'>Amount</label>
                                    </div>
                                    <div className="groupelec">      
                                        <input className='inputelec' type="text" required value={etatpay}  placeholder="etat payement" readOnly/>
                                        <span className="highlightelec"></span>
                                        <div className="barelec"></div>
                                        <label className='labelelec'>Payment state </label>
                                    </div>
                                    <div className="groupelec">      
                                        <input className='inputelec' type="text" required value={kwConsomme} placeholder="tranche" readOnly/>
                                        <span className="highlightelec"></span>
                                        <div className="barelec"></div>
                                        <label className='labelelec'>kw Consume</label>
                                </div>
                                <div className="groupelec">      
                                        <input className='inputelec' type="date"  value={date} onChange={senddate} placeholder="date" required />
                                        <span className="highlightelec"></span>
                                        <div className="barelec"></div>
                                        <label className='labelelec'>date</label>
                                </div>
                                <input type="submit" id="payelectr" type="button" className='bnt btn-outline-danger' style={{width:"150px",heigth:"80px"}}  onClick={updatePayelectric} value="pay bill"/>
                                 
                                <button className="print-button"  type="button"><span className="print-icon" id="printelectric" onClick={print} style={{display:"none"}}></span></button><br/>
                                </form>
                      
                      
                    </div>
                    
                </div>
                </div>
            </div>
            <div id="ticketshow" style={{display:"none"}} >
                    <Ticket id="div" titre={"Electrecity Bill Payment"} nom={nom} prenom={prenom} adresse={adresse} id={compteur}  mounth={mounth} amount={amount} refelectrecity={refelectrecity}/>
                </div>
        </div>
     )
    
}


