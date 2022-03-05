import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ipAddresses } from '../../shared/Data';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './addUser.css'

export default function AddUser() {
    const navigate = useNavigate()
    toast.configure()

    const toastId = React.useRef(null);
    const [nom, setNom]=useState("")
    const [prenom, setPrenom]=useState("")
    const [email, setEmail]=useState("")
    const [role, setRole]=useState("user")
    const [password, setPassword]=useState("")

    const errorToast = () => {
        if(!toast.isActive(toastId.current)) {
            toastId.current = toast.danger('An error has occured in insertion try later',
                {
                    theme: "colored",
                    position : toast.POSITION.BOTTOM_CENTER,
                    autoClose:2000
                }
            )
        }
    }

    const successToast = () => {
        if(!toast.isActive(toastId.current)) {
            toastId.current = toast.success('The user was added successfuly',
                {
                    theme: "colored",
                    position : toast.POSITION.BOTTOM_CENTER,
                    autoClose:2000
                }
            )
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios({
            url: `http://${ipAddresses[0].addresseIP}:8043/users/save`,
            method: "POST",
            data:{'nom':nom, 'prenom':prenom,'email':email,
            'password':password,'role':role}
          }).then(res=>{
            const resText = JSON.stringify(res.data);
            console.log(resText)
            successToast()
            navigate('/users')
        }).catch(error => errorToast())

    }

    const handleChangeNom = (e)=>{
        setNom(e.target.value)
    }
    const handleChangePrenom = (e)=>{
        setPrenom(e.target.value)
    }
    const handleChangePassword = (e)=>{
        setPassword(e.target.value)
    }
    const handleChangeRole = (e)=>{
        setRole(e.target.value)
    }
    const handleChangeEmail = (e)=>{
        setEmail(e.target.value)
    }

    return (
        <div>
            <div className='container' >
            <div className='farid-form '>
                <form method='post' onSubmit={handleSubmit}>
                    <div className="form-group">
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="text" required className="form-control item" name='nom'  value={nom} onChange={handleChangeNom}
                         placeholder="Nom "/>
                    </div>
                    <div className="form-group">
                        <input type="text"  required className="form-control item" name='prenom' value={prenom}
                         onChange={handleChangePrenom} placeholder="Prenom "/>
                    </div>
                    <div className="form-group">
                        <input type="email" required className="form-control item" name='email' value={email}
                         onChange={handleChangeEmail} placeholder="Email "/>
                    </div>
                    <div className="form-group">
                        <input type="password" name='password' required className="form-control item"  
                        value={password} onChange={handleChangePassword} placeholder="Password"/>
                    </div>
                    <select className="form-control item" onChange={handleChangeRole} name='role' >
                        <option key={0} value="" disabled selected>-</option>
                        <option key={2} value="admin">Admin</option>
                        <option key={3} value="user">Normal User</option>
                        
                    </select>
                    <div className="form-group">
                        <button type='submit' className="btn btn-block  salim create-account btn-lg" ><i className='fas fa-user-plus' ></i> Add User</button>
                    </div>
                </form>
            </div>
            <div className='mt-5 mb-5'></div>
            </div>
        </div>
    )
}
