import Chart from 'chart.js/auto'
import { Bar, getElementAtEvent} from 'react-chartjs-2';
import { ipAddresses } from '../../../shared/Data'
import axios from 'axios';
import React, {  useState, useRef } from 'react'
import { useEffect } from 'react/cjs/react.development';
export default function EauElectricityChart() {
    const myOptions = {
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric",

    }
    const myref = useRef()
    const [chartData,setCharData] = useState([1,2,3])
    const [labelhaw,setlabelhaw] = useState(['1','2','3'])
      useEffect(() => {
          fillChart()
      }, []) 
  

      const fillChart = () =>{
      
         axios({
             url: "http://"+ipAddresses[1].addresseIP+":8080/MouthWater/statisticwater", 
            method: "GET",
          }).then(res =>{
                const response = res.data;
                var  lab=[]
                var test =  Object.keys(response)
                console.log(Object.values(response))
                setCharData(Object.values(response))
                Object.keys(response).map((item)=>{
                    var d = new Date(item).toLocaleDateString("en-US", myOptions)
                    console.log(d)
                    lab.push(d)
                })
                setlabelhaw(lab)
          })
          
           
        }
        const data =    {
            labels: labelhaw,
                  datasets: [{
                    label: 'Number Of Water Bills Payed per Date',
                    data: chartData,
                    backgroundColor: [
                      'rgba(255, 99, 130, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 130, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1
                  }]
        } 
        return(
            <div>
                <Bar
                   ref={myref}
                         data={data}
                         height="600px"
                        width="600px"
                         options={{ 
                            responsive: false,
                            plotOptions: {
                                series: {
                                   groupPadding: 0
                                }
                             },
                            
                            
                        }} 
                        
                        />
            </div>
        )

                 }
          
       
       
        
     
