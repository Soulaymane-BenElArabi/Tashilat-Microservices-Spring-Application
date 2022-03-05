/* import React, { Component, useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { ipAddresses } from '../shared/Data'
import Chart from 'chart.js/auto'
import { useRef } from 'react';
import { Bar,getElementAtEvent} from 'react-chartjs-2';
import axios from 'axios';
import './Water.css'

export default function Water() {
    const [chartData, setCharData] = useState({})
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            chartData: { 
                labels : ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12'],
                datasets: [
               {
                 label: 'Bills by mounth',
                 data: [0,0,0,0,0,0,0,0,0,0,0,0] ,//labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                 backgroundColor: 'rgba(255, 99, 132, 0.5)'
               },]},
             
            
        }
        this.myref = React.createRef()
        
    }

    componentDidMount(){
        let ref='123'
        axios({
            
            url: "http://"+ipAddresses[1].addresseIP+":8080/MouthWater/FactureContrat/"+ref,
            method: "GET",
           // data:{'ref':1}//this.state.password
          }).then(res =>{
            const response = res.data;
         var arraye = []
            for(var i =0;i< response.length;i++){
                var test = {}
                console.log(test)
                 test.x = response[i].mouth
                 test.y = response[i].amount
                 arraye.push(test)
                 console.log("maping chart "+test)
                
            }
            console.log("final data chart"+arraye)
            
           
          
              
            
          
            this.setState({
                chartData: { 
                    labels : [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                    datasets: [
                   {
                     label: 'Dataset 1',  
                     data: arraye,
                      backgroundColor: 'rgba(255, 99, 132, 0.5)'                   
                   }]},
  
              })
      
       
          }).catch(error => console.log(" hajar :  in catch when retreiving data from api"+error))
    }

     handleClick= (event)=>{
 
         console.log(getElementAtEvent( this.myref.current, event));
        var test = getElementAtEvent( this.myref.current, event)
        console.log(test[0].index)
        
        
    }
   
    render()
     {

        console.log(ipAddresses[1])
        return (
            <div className="container">
                <div className="col-8">
                    <label>enter home reference please</label>
                    <input type="reference" className="form-control"  placeholder="reference"/>
            </div>
                <div className="row">
                    <div className="col-6">
                 test
                    </div>
                    <div className="col-6">
                    
                    <Bar
                     ref={this.myref}
                      data={this.state.chartData}
                      onClick={this.handleClick}
                       options={{  }}
        />
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Water
 */