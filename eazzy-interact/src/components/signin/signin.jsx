import React from "react"
import './signin.css'
import logo from './logo.jpeg'
import google from './google.png'
import facebook from './facebook1.png'
import { Link } from "react-router-dom";


export const SignIn = () =>{

    return(
        <div id="signinContent">
            <div id="signinHeader">
                <hr/>
                <span><img src={logo} alt="" /></span>
                <h3>Eazzy Interact</h3>
                <hr/>
            </div>
            <form action="" id="signinForm">
                <h1>SIGN IN</h1>
                <p>Welcome to Eazzy Interact fill in this form</p>
                <div className="signinInput">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter your email"/>
                </div>
                <div className="signinInput">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="............"/>
                </div>
                
                <button ><Link to="" id="link">Sign in</Link></button>
                <p id="or"><hr /> OR <hr /></p>
       
            </form>
            
            <p id="signinAlternative">Don't have an account? <span>
            <Link to="/signup" >Sign up</Link>
            </span></p>
              
            <p id="signAlternative">Forgot Password? <span>
            <Link to="/reset" >Reset password</Link>
            </span></p>
           
        </div>
    );
}