import React from 'react';
import "./HeroBanner.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import SearchTabs from "../../components/searchtabs/SearchTabs.jsx";
function HeroBanner() {
  return (
    <div className="heroBanner">
      <Navbar/>
      <div className="heroBanner__contents">
        <div className="contentsHeader"> 
            <h1>Air, sleep,<br />dream</h1>
        </div>
        <div className="contentsInfo">
            <p>Find and book a great experience.</p>
        </div>
        <div className="contentsButton">
            <button>Start your search</button>
        </div>
      </div>
      <SearchTabs/>
    </div>
  )
}

export default HeroBanner