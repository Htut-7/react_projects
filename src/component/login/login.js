import React from 'react'
import {useState} from 'react';
import './login.css';

export default function Login({goToSignup}) {
    let [email,setEmail]=useState();
    let [password,setPassword]=useState();
  return (
    <form className="container">
        <div className="container-log">
            <div className="container-page">
                <h1>Login</h1>
               
                    <input type="email" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
               
                    <input type="password" placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} value={password} />

                    <p className="account-container">
                        Don't have an account?{' '}
                        <span className="account" onClick={goToSignup}>Register Here</span>
                    </p>

                    <div className="container-btn">
                        <button>Login</button>
                    </div>

                    <p className="contact-container">
                        Any Problem?
                        <span className="contact">Contact Us</span>
                    </p>
            </div>
        </div>
    </form>
  )
}
