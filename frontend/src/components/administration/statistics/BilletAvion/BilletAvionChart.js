
import axios from 'axios';
import {ipAddresses} from '../../../shared/Data.js'
import React, { useEffect } from 'react'
import {useState} from 'react'
import Chart from 'chart.js/auto'
import { Bar,getElementAtEvent} from 'react-chartjs-2';

export default function BilletAvionChart() {
    var lab= [];
    var myOptions = {
        weekday: "long", 
        day: "numeric",
        month: "long", 
        year: "numeric"
    }
    const [chartData,setCharData] = useState([12, 19, 3]);
    const [mylabels,setmylabels] = useState(['Red', 'Blue', 'Yellow']);
    const myref = React.useRef();
    const loadMData=()=>{
        axios({
            url: `http://${ipAddresses[2].addresseIP}:${ipAddresses[2].port}/tickets/num`,
            method: "GET"
          }).then(res=>{
            setCharData(Object.values(res.data))
            Object.keys(res.data).map((item)=>{
                var d = new Date(item).toLocaleDateString("en-US", myOptions)
                console.log(d)
                lab.push(d)
           })
           setmylabels(lab);

            //setmylabels(Object.keys(res.data))
        
        })
        .catch(error => console.log(error+" flight simple error"))

    }
    useEffect(()=>{
        loadMData();
    },[])
      
    const data =  {
        labels : mylabels,
        datasets: [
            {
                
                barPercentage: 0.95,
                categoryPercentage: 0.95,
                label: '',
                data: chartData,
                backgroundColor:[
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],   
                borderColor : [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],   
                borderWidth : 1,
                
            }
        ]
    }

    return (
        <div>
            <Bar
                        ref={myref}
                        data={data}
                        height="600px"
                        width="600px"
                        options={{ 
                            responsive: false,
                            plugins: {
                                legend: {
                                  position: 'top',
                                },
                                title: {
                                  display: true,
                                  text: 'Tickets Salled By Day',
                                },
                              },
                            
                            scales: {
                                
                                y: {
                                    beginAtZero: true,
                                 }
                            }
                            
                        }} 
                        
                        />
        </div>
    )
}
