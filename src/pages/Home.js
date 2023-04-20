import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Home() {

  const [users, setUsers]=useState([])

  // useEffect(()=>{
  //   loadUsers()
  // }, [])

  // we use useEffect below (without empty array) to avoid the problem of non-loading of newly created users
  useEffect(() =>
  {
    loadUsers()
  }) //execute every time when state change

  const loadUsers = async () =>
  {
    console.log("code with karim")
    const result = await axios.get("http://localhost:8080/users");
    //console.log('loadUsers result ====>', result.data );
    setUsers(result.data);
  }
 
  const deleteUser = async (id) =>
  {
    await axios.delete(`http://localhost:8080/user/${id}`);
    //loadUsers(); not necessary because useEffect above do the loading ussers when state changed
  }

  return (

    <div className="container">
        <div className ="py-4 px-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {  
              users.map((user, index) => (
                
                <tr>
                  <th scope="row" key={index}>{ index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button type="button" className="btn btn-primary mx-2">View</button>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/edituser/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger mx-2"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>

              ))
            }
          
          </tbody>

        </table>
        </div>
    </div>
  )
}
