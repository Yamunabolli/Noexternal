import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

export default function Sign() {
const[password,setPassword]=useState('')
const[email,setEmail]=useState('')
const nav = useNavigate()
const handleclick =(e)=>{
    setPassword(e.target.value)
    setEmail(e.target.value)
}
const handlesubmit =()=>{
  nav("/Login")
}
  return (
    <div className='loginbg'> 
    <div className='card'>
      <div className="card-body">
      <form>
      <legend><h1>Employee Management</h1></legend>  
      <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={handleclick}/> <br>
        </br>
        <label className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name='password' onChange={handleclick}/><br></br>
      <button type="submit" className="btn btn-primary" onClick={handlesubmit} >Submit</button>
    </form>
      </div>
    </div>
    </div>
  )
}
