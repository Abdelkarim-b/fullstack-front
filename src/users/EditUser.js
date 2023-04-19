import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser()
{

  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const onInputChage = (e) =>
  {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  useEffect(() =>
  {
    loadUserToEdit()
  }) //execute every time when state change

  const loadUserToEdit = async () =>
  {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  }
  
  const onSubmit = (e) =>
  {
    e.preventDefault();
    axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

 

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Edit user</h2>
          <form onSubmit={(e) => { onSubmit(e) }}>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label'>Name</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name='name'
                value={user.name}
                onChange={(e) => { onInputChage(e) }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='Username' className='form-label'>Username</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name='username'
                value={user.username}
                onChange={(e) => { onInputChage(e) }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='Email' className='form-label'>E-mail</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your E-mail adresse"
                name='email'
                value={user.email}
                onChange={(e) => { onInputChage(e) }}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>

      </div>
    </div>
  )
}
