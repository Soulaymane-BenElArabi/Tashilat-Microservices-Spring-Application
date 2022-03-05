import React, {useState} from 'react'
import './Login.css'
import admin from '../../../images/authentification/admin2.png'
// import {Link} from 'react-router-dom'
import axios from 'axios';

import {ipAddresses} from '../../shared/Data'
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

function Login(){
    const {login, changeRole} =useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userNotFound, setUserNotFound] = useState(false)
    const [passwordIncorrect, setPasswordIncorrect] = useState(false)
    
    const handleChangeEmail = (event) =>{
        setEmail(event.target.value);
      }
    const handleChangePassword = (event) =>{
        setPassword(event.target.value);
      }
     
    const handleSubmit =(event)=> {
        event.preventDefault();
        axios({
            url: "http://"+ipAddresses[0].addresseIP+":8043/users/check",
            method: "POST",
            data:{'id':0,'email':email, 'password':password}
          }).then(res =>{
            const responseText = res.data
            switch (responseText) {
                case "notFound":
                    // display no user with this email and password
                    setUserNotFound(true)
                    setPasswordIncorrect(false)
                    break;
                case "accessPermitted_user":
                    // if access permitted redirect to cards page
                    console.log("accessPermitted")
                    login()
                    changeRole("client")
                    navigate("/cards")
                    break;
                case "accessPermitted_admin":
                    // if access permitted redirect to cards page
                    console.log("accessPermitted")
                    login()
                    changeRole("admin")
                    // navigate to stats place
                    navigate("/users")
                    break;
                case "passwordIncorrect":
                    // if the password is inccorect
                    setPasswordIncorrect(true)
                    setUserNotFound(false)
                    break;
                
                default:
                    console.log("default")
                    break;
            }
          }).catch(error => console.log(error+" salim"))
        
        
    }
    
     
    return (
        <div className='hero py-5 mb-5'><div style={{height:"50px"}}></div>
             <div className='container'>
                <div className='row align-items-center'>
                <div className='col-lg-3 col-12 '></div>
                    <div className='col-lg-6 col-12 '>
                        <h1 className='title text-capitalize text-center'>Sign in to use services</h1>
                            <div className='account-wall'>
                                <img className='profile-img' alt='' src={admin} ></img>
                                {userNotFound ?
                                <label className='soulaymaneCenter btn btn-lg btn-danger'>No user with this name and password</label>:''}
                                    {passwordIncorrect ?
                                 <label className='soulaymaneCenter btn btn-lg btn-danger'>your password is incorrect</label>:''}
                                    
                                    <form className='form-group p-5' method='post' onSubmit={handleSubmit}>
                                    
                                        <input type='email' name='email'  className='form-control' onChange={handleChangeEmail} placeholder='Email' required autoFocus />
                                        <br />
                                        <input type='password'  name='password' className='form-control'  onChange={handleChangePassword}  placeholder='Password' required autoFocus />
                                        <br />
                                        <button style={{backgroundColor:'#e91e63'}}  className='soulaymaneCenter btn btn-lg text-white ' type='submit'>Sign In</button>
                                        
                                    </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
