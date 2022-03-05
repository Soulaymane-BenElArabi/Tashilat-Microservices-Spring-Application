import React, {useState, useLayoutEffect} from 'react'
import Chart from 'chart.js/auto'
import { Line,getElementAtEvent} from 'react-chartjs-2';

import axios from 'axios';
import { ipAddresses } from '../../../shared/Data';

export default function CarBillChart() {
    const myRef = React.useRef()
    var myOptions = {
        weekday: "long", //to display the full name of the day, you can use short to indicate an abbreviation of the day
        day: "numeric",
        month: "long", //to display the full name of the month
        year: "numeric"
    }
    const [chartData, setChartData] = useState([11, 2, 36, 4, 5 , 6, 7 ])
    const [labels,setLabels] = useState(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']) ;

    const handleClick = () =>{
        console.log("click on chart")
    }
    useLayoutEffect(() => {
        getDataForBillChart();
    } ,[]);
    var lab= []
    
    
    const getDataForBillChart= () =>{
        axios({
            url: `http://${ipAddresses[0].addresseIP}:8043/vehicules/counting`,
            method: "GET"
        }).then(res =>{
            const responseText = res.data
            setChartData(Object.values(responseText))
            Object.keys(responseText).map((item)=>{
                var d = new Date(item).toLocaleDateString("en-US", myOptions)
                console.log(d)
                lab.push(d)
           })
           setLabels(lab)
        }).catch(error => console.log(error+" while getting vehicules data for chart")) 
    }

    

    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: chartData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 1,
            },
          ],
      };
    
    return (
        <div>
            <Line
                        ref={myRef}
                        data={data}
                        onClick={handleClick}
                        height="600px"
                        width="600px"
                        options={{ 
                            plugins: {
                                legend: {
                                  position: 'top',
                                },
                                title: {
                                  display: true,
                                  text: 'Vihecule Tax Payed By Day',
                                },
                              },
                            responsive: false,
                            maintainAspectRatio: true ,
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
                                    text: '',
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
    )
}
