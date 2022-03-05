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
import { Ticket } from './Ticket';
import WaterLogo from '../../images/hajar/WaterLogo.png'

export default function Water() {
    const locationwater = useLocation()
   if(localStorage.getItem("counter")==null){
     localStorage.setItem("counter", 0)
   }
    
    //console.log(location.state.referenceWater)
    onafterprint = function () {
      window.location.reload(false);
      //window.location.href = "/cards";
  }
  onbeforeprint = function(){
   
    document.getElementById("rowContainerDiv").style.display = "none";  
    document.getElementById("ticketshow").style.display = "";
    document.getElementById("ticketshow").style.zoom = "2";
    document.getElementById("ticketshow").style.marginTop = "-150px";
    document.getElementById("ticketshow").style.marginLeft = "-25px";

  }
    const [refeau, setrefeau] = useState(locationwater.state.referenceWater)
    const [date, setdate] = useState("Null")
    const timestamp = new Date().toLocaleString();
    const [nom, setnom] = useState('')
    const [prenom, setprenom] = useState('')
    const [adresse, setadresse] = useState('')
    const [year, setYear] = useState(2022)
    const [mounth,setmounth] = useState('')  
   const [amount,setamount] = useState('')
    const [etatpay,setetatpay] = useState('')
    const [tranche,setranche] = useState('')
    const [volumConsome,setvolumConsome] = useState('')
    const arr = [];
   
  
    const [chartData,setCharData] = useState({
        labels: [],
        datasets:[{}]
      })
     
      toast.configure()
      const nav = useNavigate()
    const myref = useRef()
    const toastId = React.useRef(null);
     useEffect(() => {
      try{
        
        
       
     
          if(locationwater.state.referenceWater === null){
              
             nav('/eauElectrecity/Bils');
          } }catch(error){console.log(error)}
        fillChart()
      
        console.log(timestamp)
                return () => {
            console.log("testinfg cchart")
        };

    }, []) 
   
    
    const changeyears=(event)=>{
        setYear(event.target.value)  
     
    }
    const senddate=(event)=>{
      setdate(event.target.value)
    }
    function submit() {
        
      
        fillChart()

    }

    const total = ()=>{
        axios({
            url:"http://"+ipAddresses[1].addresseIP+":8080/Facture/all/"+refeau,
            method:'GET',
        }).then(res=>{const response = res.data
            console.log("jhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"+response[0])
        setnom(response[0][0])
        setprenom(response[0][1])
        setadresse(response[0][2])
      //  setid(response[0][3])
    
        }).catch(error => console.log(" hajar :  in catch when retreiving data from api"+error))
    }

    const fillChart = () =>{
      
        //let test1="1"
        
         axios({
             url: "http://"+ipAddresses[1].addresseIP+":8080/MouthWater/FactureContrat/"+refeau+"/"+year, 
            method: "GET",
           // data:{'ref':1}//this.state.password
          }).then(res =>{
           
            const response = res.data;
           if(response.length == 0){
          
             //  console.log(refeau)
                 if(!toast.isActive(toastId.current)) {
                    toastId.current = toast.error('invalid data,..check reference',{position : toast.POSITION.TOP_CENTER,autoClose:2000})
                  }
                
               
                
                setTimeout(()=> {
                    nav('/eauElectrecity/Bils');
                   }, 2000);
               
            }
            else{
            console.log("gggggggggggggggggggggggggggggg"+response)
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
              //   labels.push(response[i].mouth)



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
                    colors.push(  'rgba(54, 162, 235, 0.2)')
                    borders.push( 'rgb(54, 162, 235)')
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
                            borderWidth : 2,
                            
                        }
                    ]
                }
  
              ) 
            }
       
         }).catch(error => console.log(" hajar :  in catch when retreiving data from api"+error))
     }

        const handleClick= (event)=>{
 
        var test = getElementAtEvent(myref.current, event)
        try{
          console.log(test[0].index)
       
          /////
       
       
             axios({
             url: "http://"+ipAddresses[1].addresseIP+":8080/MouthWater/FactureDatails/"+(test[0].index+1)+"/"+refeau,
             method: "GET",
            // data:{'ref':1}//this.state.password
           }).then(res =>{
     
            
             const response = res.data;
               document.getElementById("formhada").style.display = "initial";  
               document.getElementById("chart").classList.remove("col-10");
               document.getElementById("chart").classList.add("col-8");
               
             
     
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
               
               
           
             setranche(response[0].tranche)
             setvolumConsome(response[0].volumConsome)
             setamount(response[0].amount)
     
     
     
           })
        }catch(error){
          console.log(error)
        }
       
     
        
        
    }
    const cnt =()=>{
      var count=parseInt(localStorage.getItem("counter"))
          count = count+1
          localStorage.setItem("counter",count)
          
    }
  
    const updatePay =()=>{
    // alert(date)
          console.log({mounth}.mounth)
          document.getElementById("printwater").style.display = "";
          total()
          cnt()
        
          console.log("loooooooooooooooooooooool"+{etatpay}.etatpay)
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
                url: "http://"+ipAddresses[1].addresseIP+":8080/MouthWater/pay/"+mois+"/"+refeau+"/"+year+"/"+date,
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
    
                   
    
                            
    
              })
            }else{
              toastId.current =  toast.warning('DATA FIELD IS EMPTY',{theme:'colored',position : toast.POSITION.TOP_LEFT,autoClose:2000}) //false
            }
              
          }else{
               if(!toast.isActive(toastId.current)) {
                  toastId.current =  toast.warning('bils is already payed',{theme:'colored',position : toast.POSITION.TOP_LEFT,autoClose:2000})
                }
              
          }
          

      }
      const print =()=>{
        window.print()
        


      }

    return (
      
        
            <div className="container">
                  <div style={{height:"40px"}}>

</div>
                <div className="row" id="rowContainerDiv">
                  <div className='d-flex justify-content-center'> 

                 
                  <div className="col-10" id="chart">
                         <div className='d-flex flex-row-center'>

                           
                         <div className="col-auto">
                        
                        <div className="input-group mb-2">
                          <div> 
                            <input type="image" className="btn" id="imgbutton" src={WaterLogo}  htmlFor="yearschoice" onClick={submit}/>
                          </div>
                        
                            <div className="col-2">
                            <div className="group">      
                            <input list="years" value={year} onChange={changeyears} className='inputyear'  placeholder='year' id="yearschoice" />
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
                        ref={myref}
                        data={chartData}
                        onClick={handleClick}
                        options={{ 
                            responsive: true,
                            plotOptions: {
                                series: {
                                   groupPadding: 0
                                }
                             },
                            
                            scales: {
                                
                                y: {
                                    categoryPercentage: 1.0,
                                     barPercentage: 1.0,
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
                                       
                                    },
                                    
                                    
                                    grid: {
                                        offset: true
                                      }
                                   
                                   
                                    }
                                },x: {
                                    categoryPercentage: 1.0,
            barPercentage: 1.0,
                                    display: true,
                                    
                                }
                            }
                            
                        }} 
                        
                        />
                     </div>
                    <div className="col-4" style={{display:"none"}} id="formhada">
                        <div className="registration-form">
                          <div className='d-flex justify-content-center'>
                             <label className='btn btn-outline-primary'>Number of payments : {localStorage.getItem("counter")}</label><br/>
                          </div>
                        
                            <form>
                            
                                <div className="group">      
                                    <input className='input' type="text" required value={mounth} placeholder="Mounth" readOnly/>
                                    <span className="highlight"></span>
                                    <div className="bar"></div>
                                    <label className='label'>Mounth</label>
                                </div>
                                <div className="group">      
                                    <input className='input' type="text" required value={amount} placeholder="Amount" readOnly/>
                                    <span className="highlight"></span>
                                    <div className="bar"></div>
                                    <label className='label'>Amount</label>
                                </div>
                                <div className="group">      
                                    <input className='input' type="text" required value={etatpay} placeholder="etat payement" readOnly/>
                                    <span className="highlight"></span>
                                    <div className="bar"></div>
                                    <label className='label'>etat payement</label>
                                </div>
                            
                                <div className="group">      
                                    <input className='input' type="text" required value={tranche} placeholder="tranche" readOnly/>
                                    <span className="highlight"></span>
                                    <div className="bar"></div>
                                    <label className='label'>Tranche</label>
                                </div>
                                <div className="group">      
                                    <input className='input' type="text" required value={tranche} placeholder="consum volum" readOnly/>
                                    <span className="highlight"></span>
                                    <div className="bar"></div>
                                    <label class='label'>consum volum</label>
                                </div>
                                <div className="group">      
                                    <input className='input' type="date"  onChange={senddate} placeholder="date" required/>
                                    <span className="highlight"></span>
                                    <div className="bar"></div>
                                    <label class='label'>date</label>
                                </div>
                            

                                <div className="form-group" id="form-group">
                                    <div className="row">
                                        <div className="col"><br/>
                                        
                                                <button  id="pay" type="button" className='bnt btn-outline-primary' style={{width:"150px",heigth:"80px"}} onClick={updatePay}>Pay Bill </button>
                                        <button htmlFor="pay"  type="button"  className="print-button"><span className="print-icon" id="printwater" onClick={print} style={{display:"none"}}></span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="ticketshow" style={{display:"none"}}>
                    <Ticket id="div" nom={nom} prenom={prenom} adresse={adresse} mounth={mounth} amount={amount} refeau={refeau} titre={"Water Bill Payment"}/>
                </div>
                
            </div>
         )
        }
                     
