import React from 'react';
import "./SearchItem.css";
import {Link} from "react-router-dom"
const SearchItem=({item})=> {
  return (
    <div className="SearchItem">
      <img src={item.photos[0]} alt="" className="SearchItem__img" />
      <div className="SearchItem__desc">
        <h1 className="SearchItem__title">{item.name}</h1>
        <span className="SearchItem__distance">{item.desc}</span>
        <span className="SearchItem__taxiOptions">Free airport taxi</span>
        <span className="SearchItem__subtitle">{item.title}</span>
        <span className="SearchItem__feature">
          Entire studio &#8226; 1 bathroom &#8226; 21m<sup>2</sup> full bed
        </span>
        <span className="SearchItem__cancelOptions">Free cancellation</span>
        <span className="cancelOptionsSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="SearchItem__details">
        {item.rating&&
          <div className="SearchItem__rating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        }
        
        <div className="SearchItem__detailTexts">
          <span className="SearchItem__price">Rs. {item.cheapestPrice}</span>
          <span className="SearchItem__taxOptions">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="SearchItem__seeAvailability">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchItem