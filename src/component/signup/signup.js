import React from 'react';
import { useState } from 'react';
import './signup.css';

export default function SignUp({goToLogin}) {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    

    let submit=()=>{

    }
  return (
        <div className="login-page">
            <div className="login-container">
                <h1>SignUp</h1>

            <input type="text" value={name} placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}></input>

                <input type="email" value={email} placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}>
                </input>

                <input type="password" value={password} placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)}>
                </input>

                <button onClick={submit}>SignUp</button>

                <p className="switch-text">
                    Already have an account?{' '}
                    <span className="login-link" onClick={goToLogin}>Login</span>
                </p>
            </div>
        </div>
  )
};
