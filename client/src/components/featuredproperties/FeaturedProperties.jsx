import React from 'react'
import "./FeaturedProperties.css";
import {IoMdStar, IoMdStarHalf} from "react-icons/io";
import fp1 from "../../assets/images/featured_properties/fp1.jpg"
import fp2 from "../../assets/images/featured_properties/fp2.jpg"
import fp3 from "../../assets/images/featured_properties/fp3.jpg"
import fp4 from "../../assets/images/featured_properties/fp4.jpg"
import fp5 from "../../assets/images/featured_properties/fp5.jpg"
import useFetch from "../../hooks/useFetch.js"
const FeaturedProperties = () => {
    const{data,loading,error}=useFetch("/hotels?featured=true&limit=5");
  return (
    <div className='featuredProperties'>
        {
            loading?'loading':
            <>  
                {data.map(item=>( 
                    <div className="featuredProp__Items" key={item._id}>
                        <img src={item.photos[0]} alt="" className="featuredProp__Img" />
                        <div className="featuredProp__details">
                            <div className="fp_details_first">
                                <div className="fp__Name">{item.name}</div>
                                <div className="fp__Price">Rs.{item.cheapestPrice}</div>
                            </div>
                            <div>
                                <div className="fp__Location">{item.city}</div>
                            </div>
                            <hr />
                            {item.rating &&
                                <div className="fp__Rating">
                                    {Array.from({ length: item.rating }).map((rating, index) => (
                                         <IoMdStar key={index}  className="rating__icon"/>
                                    ))}
                                    <span className="rating">(50)</span>
                                </div>
                            }
                        </div>
                    </div>
                ))}
            </>
        }
    </div>
  )
}

export default FeaturedProperties