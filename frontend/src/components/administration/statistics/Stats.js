import React from 'react'
import BilletAvionChart from './BilletAvion/BilletAvionChart'
import CarBillChart from './CarBillChart/CarBillChart'
import EauElectricityChart from './EauElect/EauElectricityChart'
import TvaChart from './TvaChart/TvaChart'

export default function Stats() {
    return (
        <div className='container'>
            <div className='row m-4'>
                <div className='col-md-6'><CarBillChart /></div>
                <div className='col-md-6'><BilletAvionChart /></div>
            </div>
            <div className='row m-4'>
                <div className='col-md-6'><EauElectricityChart /></div>
                <div className='col-md-6'><TvaChart /></div>
            </div>
        </div>
    )
}
