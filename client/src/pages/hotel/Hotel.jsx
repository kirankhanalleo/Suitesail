import {React,useContext,useState} from 'react'
import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import {FaLocationArrow} from "react-icons/fa";
import {AiFillCloseCircle} from "react-icons/ai";
import {BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill} from "react-icons/bs";
import useFetch from '../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import moment from "moment"
import { AuthContext } from '../../context/AuthContext';
import { Reserve } from '../../components/reserve/Reserve';
import { Toaster } from 'react-hot-toast';

const Hotel=()=> {
  const location = useLocation();
  const id=location.pathname.split('/')[2];
  const[slideNumber, setSlideNumber]=useState(0);
  const[openSlide, setOpenSlide]=useState(false);
  const[openModal, setOpenModal]=useState(false);
  
  const handleOpen=(i)=>{
    setSlideNumber(i);
    setOpenSlide(true);
  }
  const handleMove=(direction)=>{
    let newSlideNumber;
    if(direction === 'l'){
      newSlideNumber = slideNumber === 0 ? 2 : slideNumber-1
    }
    else{
      newSlideNumber = slideNumber === 2 ? 0 : slideNumber+1
    }
    setSlideNumber(newSlideNumber);
  }
  const navigate=useNavigate();
  const {data,loading,error}=useFetch(`/hotels/find/${id}`)
  const{startDate,endDate,options}=useContext(SearchContext);
  const {user}=useContext(AuthContext);
  const timeStart = moment(startDate);
  const timeEnd = moment(endDate);
  const diff = timeEnd.diff(timeStart);
  const diffDuration = moment.duration(diff).days();
  const handleClick=()=>{
    if(user){
      setOpenModal(true);
    }
    else{
      navigate("/login")
    }
  }
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}/>
      <Navbar />
      {loading?"loading":
        <>
          <div className="hotelContainer">
            <div className="hotelWrapper">
              {openSlide &&<div className="slider">
                <AiFillCloseCircle className='closeBtn' onClick={()=>setOpenSlide(false)}/>
                <BsFillArrowLeftSquareFill className='arrow' onClick={()=>handleMove('l')}/>
                <div className="sliderWrapper">
                  <img src={data.photos[slideNumber]} alt="" className='sliderImage' />
                </div>
                <BsFillArrowRightSquareFill className='arrow' onClick={()=>handleMove('r')}/>
                </div>}
              <button className="bookNow" disabled={diffDuration==0} onClick={handleClick}>Reserve or Book Now</button>
              <h1 className="hotelTitle">{data.name}</h1>
              <div className="hotelAddress">
                <FaLocationArrow/>
                <span>{data.city}</span>
              </div>
              <span className="hotelDistance">
                Excellent location -  {data.distance} from lake
              </span>
              <span className="hotelPriceHighlights">
                Book a stay over Rs. {data.cheapestPrice} at this property
                and get a free airport taxi.
              </span>
              <div className="hotelImages">
                {data.photos?.map((image,i)=>(
                  <div className="hotelImageWrapper">
                    <img src={image} onClick={()=>handleOpen(i)} alt="" className="hotelImg" />
                  </div>
                ))}
              </div>
              {!diffDuration==0&&
              <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelDetailsText__title">{data.title}</h1>
                <p className="hotelDetailsText__desc">
                  {data.desc}
                </p>
              </div>
              <div className="hotelDetailsPrice">
                {
                diffDuration === 1 ?
                  <h1>Perfect for a day stay</h1> :
                  <h1>Perfect for {diffDuration}-nights stay</h1>
                }
                <span>
                  Located in heart of {data.city}, this property has an excellent location
                  score of {data.rating}!
                </span>
                <h2>
                  <b>Rs. {data.cheapestPrice*diffDuration*options.room} </b>({diffDuration} nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book now</button>
              </div>
            </div>
              }
              
            </div>
            <MailList/>
            <Footer className="footer"/>
          </div>  
        </>
      }
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  )
}

export default Hotel