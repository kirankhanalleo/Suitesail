import React from 'react'
import "./PropertyList.css";
import hotels from "../../assets/images/property_list/hotels.jpg"
import resorts from "../../assets/images/property_list/resorts.jpg"
import apartments from "../../assets/images/property_list/apartment.jpg"
import villas from "../../assets/images/property_list/villas.jpg"
import beachhouses from "../../assets/images/property_list/beachhouses.jpg"
import cottages from "../../assets/images/property_list/cottages.jpg"
import useFetch from "../../hooks/useFetch.js";

const PropertyList = () => {
    const{data,error,loading} = useFetch("/hotels/countByType");
    console.log(data)
    const images=[
        hotels,apartments,resorts,villas,cottages,beachhouses
    ]
  return (
    <div className="propertyList">
        { loading ? "loading" :
            <>{
                data&& images.map((img,i)=>(
                    <div className="propertyList__Item" key={i}>
                        <img src={img} alt="" className="propertyList__Img" />
                        <div className="propertyList__Titles">
                            <h1>{data[i]?.type}</h1>
                            <h2>{data[i]?.count} {data[i]?.type}</h2>
                        </div>
                    </div>
                ))
            }
                
            </>
        }
    </div>
  )
}

export default PropertyList