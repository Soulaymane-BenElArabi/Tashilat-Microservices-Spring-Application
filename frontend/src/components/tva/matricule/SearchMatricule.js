import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import MyTimeline from '../timeline/Timeline'

// import vehicule1 from '../../../images/tva/matricule/vehicule6.jfif'
import './SearchMatricule.css'
const  SearchMatricule=()=> {
    const navigate = useNavigate()
    const [matricule, setMatricule] = useState("")
    const handleSubmit = (event)=>{
        event.preventDefault()
        navigate("/tva/result",{state:{matricule:matricule}})
        
    }

    const handleMatriculeChange = (event)=>{
        setMatricule(event.target.value)
    }
     
    return (
            <div className='hero py-5 mb-5'>
                <div style={{height:65}}></div>

                <div className='container'>
                    <MyTimeline choice={"element1"} />
                    <div className='row'>
                         <div className='col-3 '>
                            <span>&nbsp;</span>
                        </div>
                        <div className='col-6 '>
                        <div style={{height:9}}></div>
                            <div className='account-wall'>
                                <form className='form-group p-1' method='post' onSubmit={handleSubmit} >
                                    <h4 className='soulaymaneCenter-title  mb-3'>Vehicule register number :</h4> 
                                    <input type='matricule' name='matricule' style={{width:"75%", height:"45px"}} onChange={handleMatriculeChange}  className='soulaymaneCenter form-control'placeholder="Vehicule's register" required autoFocus />
                                    <br />
                                    <button style={{backgroundColor:"#e91e63"}}  className='soulaymaneCenter-btn btn text-white salim' type='submit'>
                                        Fetch Vehicule Taxes</button>         
                                </form>
                            </div>
                        </div>
                        <div className='col-3 '>
                            <span>&nbsp;</span> 
                        </div>
                    </div>
                </div>
                <div style={{height:180}}></div>
            </div>
                  
        )
    
}

export default SearchMatricule