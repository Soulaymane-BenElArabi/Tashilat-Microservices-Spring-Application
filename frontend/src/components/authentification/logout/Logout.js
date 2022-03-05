import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../AuthContext'

export default function Logout() {
    const {logout, changeRole} = useAuth()
    const navigate = useNavigate()
    setTimeout(()=>{
        logout()
        changeRole("public")
        navigate("/")
    }, 5)
    
    const redirectEarly = () => {
        logout()
        changeRole("public")
        navigate("/")
    }
    
    return (
        <div>
            <button onClick={redirectEarly} className='btn btn-lg btn-primary'>Log out</button>
        </div>
    )
}
