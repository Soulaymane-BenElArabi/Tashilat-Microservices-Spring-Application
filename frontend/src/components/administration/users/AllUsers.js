import axios from 'axios';
import React, {useState, useLayoutEffect} from 'react'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ipAddresses } from '../../shared/Data';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';/* 
import { useNavigate } from 'react-router-dom';
 */
import './allUsers.css'

export default function AllUsers() {
    toast.configure()
    const toastId = React.useRef(null);

    const [users, setUsers] = useState([])

    const [countUsers, setCountUsers] = useState("")

    const getAllUsers =  () => {
        axios({
            url: `http://${ipAddresses[0].addresseIP}:8043/users/all`,
            method: "GET"
        }).then(res =>{
            const responseText = res.data
           // console.log()
            setUsers(responseText)
        }).catch(error => console.log(error+" salim"))    
    };
    const errorToast = () => {
        if(!toast.isActive(toastId.current)) {
            toastId.current = toast.danger('An error occured while deleting please try later',
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
            toastId.current = toast.success('User was deleted successfuly',
                {
                    theme: "colored",
                    position : toast.POSITION.BOTTOM_CENTER,
                    autoClose:2000
                }
            )
        }
    }
    
    useLayoutEffect(() => {
        getAllUsers();
        getCountUsers()
    } ,[]);

    const handleDelete= (e)=>{
        submit(e.target.value)
    }

    const getCountUsers= () =>{
        axios({
            url: `http://${ipAddresses[0].addresseIP}:8043/users/countUsers`,
            method: "GET"
        }).then(res =>{
            const responseText = res.data
            setCountUsers(responseText)
        }).catch(error => errorToast()) 
    }
    const deleteUser = (Id) =>{
        axios({
            url: `http://${ipAddresses[0].addresseIP}:8043/users/delete/${Id}`,
            method: "GET"
        }).then(res =>{
            const responseText = res.data
            window.location = "/users"
            successToast()
            console.log(responseText)
        }).catch(error => errorToast()) 
    }

    const submit = (Id) => {

        confirmAlert({
          title: 'Confirm to Delete',
          message: 'Are you sure  you wanna delete this user?',
          overlayClassName:"bg-white",
          
          buttons: [
            {
              className:"btn btn-success btn-lg",
              label: 'Yes',
              onClick: () => deleteUser(Id)
            },
            {
              label: 'No',
              className:"btn btn-danger btn-lg",
              onClick: () => console.log("Do nothing")
            }
          ]
        });
      }

    return (
        <div>
            <div style={{height:"20px"}} ></div>
            <label className='btn btn-lg center-my-label ' style={{backgroundColor:"#29b6f6 "}}>Users count is : {countUsers}</label>
            <table className="table container">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Role</th>
                <th scope="col">&nbsp;</th>
                <th scope="col">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item)=>
                    <tr key={Math.random()}>
                        <th scope="row">{item.id}</th>
                        <td>{item.prenom}</td>
                        <td>{item.nom}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td>{item.role}</td>
                        <td>
                            <button className='btn btn-success' value={item.id} >Update</button>
                        </td>
                        <td>
                            <button className='btn btn-danger' value={item.id} onClick={handleDelete} >Delete</button>
                        </td>
                    </tr>
                )}
                
            </tbody>
            </table>
            <div style={{height:"320px"}} ></div>
            
        </div>
    )
}
