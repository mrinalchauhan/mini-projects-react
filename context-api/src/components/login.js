import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext'

function Login(){
    const[username,setusername]=useState("null")
    const[password,setpassword]=useState("null")
    
    const {setUser}=useContext(UserContext)
    const handlesubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
       

    }
    // const changeEvent1=(e)=>{
    //     setusername(e.target.value)

         
    // }
    // const changeEvent2=(e)=>{
    //     setpassword(e.target.value)

         
    // }
     return(
        <>
        <h2>LOGIN</h2>
        <input type='text' placeholder='default text' value={username} onClick={handlesubmit} onChange={(e)=>setusername(e.target.value)}>
        </input>

        <input type='text' placeholder='abc123' value={password} onClick={handlesubmit} onChange={(e)=>setpassword(e.target.value)} >

        </input>
        <button onClick={handlesubmit}>SUBMIT</button>
        </>
     )

}


export default Login