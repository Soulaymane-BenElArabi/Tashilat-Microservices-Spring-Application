import React from 'react'
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import {FaEdit, FaClone, FaCarAlt, FaRedoAlt } from 'react-icons/fa'
import './timeline.css'
import { useNavigate } from 'react-router-dom'


export default function MyTimeline(props) {
    const navigate = useNavigate()
    var ch = props.choice    
    var choix1,choix2,choix3 = ""
    
    if (ch === "element1") {
        choix1 = "element1"
    }
    if (ch === "element2") {
        choix2 = "element2"
    }
    if (ch === "element3") {
        choix3 = "element3"
    }
    
    const value = "true"
    return (
        <div className='container' style={{marginLeft:"195px"}}>
            
            <Timeline minEvents={4} placeholder={value.toString()}>
                <div  className={choix1}>
                    <TimelineEvent
                        color='#FFA726' 
                        icon={FaCarAlt}
                        title='Fetch Bill'
                        subtitle='step 1'
                    />
                </div>
                <div className={choix2} >
                    <TimelineEvent
                        color='#FFEB3B'
                        icon={FaEdit}
                        title='Update Bill'
                        subtitle='step 2'
                    />
                </div>
                <div className={choix3} >
                    <TimelineEvent
                        color='#00E676'
                        icon={ FaClone}
                        title='Print Bill'
                        subtitle='step 3'
                        /* action={{
                            label: 'we add action here',
                            onClick: () => console.log('Perfect')
                        }} */
                    />
                </div>
                <div >
                    <TimelineEvent
                        color='#40C4FF'
                        icon={FaRedoAlt}
                         action={{
                            label: 'Back',
                            onClick: () => navigate("/tva/matricule")
                        }} 
                    />
                </div>
            </Timeline>
            
        </div>
    )
}
