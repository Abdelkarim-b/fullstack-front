import React from 'react'

export default function navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Full stack application</a>
                <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                >
                 <span className="navbar-toggler-icon"></span> 
                </button> 
                <button className="btn btn-outline-light">Add User</button>      
            </div>
        </nav>



    </div>
  )
}
