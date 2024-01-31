import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import "./signin.css"
import logo from "../../assets/images/suitesail.png"
import {AiOutlineMail,AiFillLock} from "react-icons/ai"
import {Link,useNavigate} from "react-router-dom"
const Signin = () => {
    const [credentials,setCredentials]=useState({
        username:undefined,
        password:undefined
    })
    const{loading,error,dispatch} =useContext(AuthContext);
    const navigate=useNavigate()
    const handleChange=(e)=>{
        setCredentials(prev=>({...prev, [e.target.id] : e.target.value}));
    }
    const handleLogin = async e=>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("/auth/login",credentials)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data.details})
            navigate("/")
        }
        catch(err){
            dispatch({type:"LOGIN_FALIURE",payload:err.response.data})
        }
    }
  return (
    <div className="signin">
        <div className="loginContainer">
            <Link to="/">
                <img src={logo} className='logo'/>
            </Link>
            <div className="username">
                <AiOutlineMail className='icon'/>
                <input type="text" placeholder='username' id="username" onChange={handleChange} className="usernameField" />
            </div>
            <div className="password">
                <AiFillLock className="icon"/>
                <input type="password" placeholder='password' id="password" onChange={handleChange} className="passwordField" />
            </div>
            <div className="buttonContainer">
                <button disabled={loading} onClick={handleLogin} className='button'>Login</button>
            </div>
            {error&&<span className='errorMsg'>{error.message}</span>}
        </div>
    </div>
  )
}

export default Signin