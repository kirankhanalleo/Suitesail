import React from "react";
import "./Home.css";
import HeroBanner from "../../components/herobanner/HeroBanner.jsx";
import Featured from "../../components/featured/Featured";
import {BiLoader} from "react-icons/bi";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredproperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
function Home() {
  return (
    <div className="home">
      <HeroBanner/>
      <div className="home__Container">
        <div className="container__Title">
          <h1>Live anywhere</h1>
          <h3>Keep calm & travel on</h3>
        </div>
        <Featured/>
        <div className="loadMore_button">
          <span><BiLoader/></span>
          <button>Load more</button>
        </div>
        <div className="container__Title2">
          <h1>Browse by property type</h1>
        </div>
        <PropertyList/>
        <div className="container__Title2">
          <h1>Go Somewhere</h1>
          <h3>Let's go on adventure</h3>
        </div>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
