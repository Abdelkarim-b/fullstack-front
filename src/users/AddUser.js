import axios from 'axios';
import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 
 export default function AddUser() {

  let navigate = useNavigate();
  const[user, setUser]=useState({
     name: "",
     username: "",
     email: ""
  });

  const {name, username, email} = user;

  const onInputChage = (e)=>{
    setUser({...user, [e.target.name]:e.target.value})
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/user", user);
    navigate("/");
  }
  return (
     <div className='container'>
       <div className='row'>
         <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
           <h2 className='text-center m-4'>Register user</h2>
           <form onSubmit={(e)=>{onSubmit(e)}}>
              <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Name</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your name" 
                  name='name'
                  value={name}
                  onChange={(e)=>{onInputChage(e)}}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='Username' className='form-label'>Username</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your username"
                  name='username'
                  value={username}
                  onChange={(e)=>{onInputChage(e)}}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>E-mail</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your E-mail adresse"
                  name='email'
                  value={email}
                  onChange={(e)=>{onInputChage(e)}}
                />
              </div>
                
              <button type="submit" className="btn btn-outline-primary">Submit</button>
              <button type="button" className="btn btn-outline-danger mx-2">Cancel</button>
           </form>
         </div>
         
       </div>
     </div>
   )
 }
 