import React, { useContext } from 'react'
import "./Navbar.css";
import logo from "../../assets/images/suitesail.png"
import {GiWorld} from "react-icons/gi";
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
const Navbar=()=> {
  const navigate=useNavigate();
  const goHome=()=>{navigate('/')};
  const{user} =useContext(AuthContext);
  return (
    <div className='navbar'>
        <div className="navbar__Container">
            <div className="navbar__logo" onClick={goHome}>
              <img src={logo} alt="logo" />
            </div>
            <div className="navbar__contents">
                <span className="support">Support</span>
                <span className="language"><GiWorld className='language__icon'/> Language</span>
                <span className="propertyListing">List your property</span>
                {user? (
                  <>
                    <div className="welcome">
                      <p>Welcome, {user.username}</p>
                    </div>
                  </>
                ):(
                  <span className="login_register">
                  <Link to ="/login">
                    <button className="login">Login</button>
                  </Link>
                    <button className="register">Register</button>
                  </span>
                )} 
            </div>
        </div>
    </div>
  )
}

export default Navbar