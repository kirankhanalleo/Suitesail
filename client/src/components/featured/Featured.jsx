import React from 'react'
import "./Featured.css";
import kathmandu from "../../assets/images/kathmandu.jpg";
import pokhara from "../../assets/images/pokhara.jpg";
import bandipur from "../../assets/images/bandipur.jpg";
import useFetch from '../../hooks/useFetch.js';
const Featured=()=> {
    const {data,loading,error} = useFetch("/hotels/countByCity?cities=kathmandu,pokhara,bandipur");
  return (
    <div className="featured">
        { loading ? "loading please wait":
            <>
                <div className="featured__Item">
                    <img src={kathmandu} alt="" className="featuredImg" />
                    <div className="featured__Titles">
                        <h1>Kathmandu</h1>
                        <h2>{data[0]} Properties</h2>
                    </div>
                </div>
                <div className="featured__Item">
                    <img src={pokhara} alt="" className="featuredImg" />
                    <div className="featured__Titles">
                        <h1>Pokhara</h1>
                        <h2>{data[1]} Properties</h2>
                    </div>
                </div>
                <div className="featured__Item">
                    <img src={bandipur} alt="" className="featuredImg"/>
                    <div className="featured__Titles">
                        <h1>Bandipur</h1>
                        <h2>{data[2]} Properties</h2>
                    </div>
                </div>
            </>
        }
    </div>
  )
}

export default Featured;