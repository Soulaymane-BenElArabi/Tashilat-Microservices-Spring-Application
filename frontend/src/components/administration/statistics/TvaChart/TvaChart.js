import React, {useState, useLayoutEffect} from 'react'
import Chart from 'chart.js/auto'
import { Doughnut,getElementAtEvent} from 'react-chartjs-2';

import axios from 'axios';
import { ipAddresses } from '../../../shared/Data';

export default function TvaChart() {
    const myRef = React.useRef()
    const [chartData, setChartData] = useState([1, 3])
    const labels = ['Admin', 'Normal User'];

    const handleClick = () =>{
        console.log("click on chart")
    }
    useLayoutEffect(() => {
        getDataForChart();
    } ,[]);
    
    const getDataForChart= () =>{
        axios({
            url: `http://${ipAddresses[0].addresseIP}:8043/users/counting`,
            method: "GET"
        }).then(res =>{
            const responseText = res.data
            setChartData([responseText.admin, responseText.user])
            //console.log(responseText.admin)
        }).catch(error => console.log(error+" while getting users data for chart")) 
    }

    

    const data = {
        labels,
        datasets: [
            {
              label: '# of Votes',
              data: chartData,
              backgroundColor: [
                'rgba(255, 205, 86, 0.9)',
                'rgba(54, 162, 235)',
              ],
              borderColor: [
                'rgba(255, 205, 86, 1)',
                'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1,
            },
          ],
      };
    
    return (
        <div>
            <Doughnut
                        ref={myRef}
                        data={data}
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
                                    text: 'Users By role',
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
