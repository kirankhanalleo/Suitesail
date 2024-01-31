import {React,useContext,useState} from "react";
import "./SearchTabs.css";
import {CiLocationArrow1} from "react-icons/ci";
import {AiOutlineCalendar} from "react-icons/ai";
import {RxPerson} from "react-icons/rx";
import {BsSearch} from "react-icons/bs";
import {SlPlane} from "react-icons/sl";
import {MdOutlineSailing} from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useNavigation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const SearchTabs=()=> {
  const[style,setStyle]=useState(0);
  const changeStyle=(index)=>{
    setStyle(index);
  }
  const[toggleState, setToggleState]=useState(1);
  const toggleTab=(index)=>{
    setToggleState(index);
  }
  const[destination, setDestination] =useState("");
  const[startDate, setStartDate] =useState(0);
  const[endDate, setEndDate] =useState(0);
  const[openOptions, setOpenOptions]=useState();
  const[options, setOptions]=useState({
    adult:1,
    children:0,
    room:1,
  });
  const handleOption=(name,operation)=>{
    setOptions((prev)=>{
      return{
        ...prev,
        [name]: operation === "increase" ? options[name] + 1 : options[name] - 1,
    };
  });
  };
  const navigate = useNavigate();
  const {dispatch}=useContext(SearchContext);
  const handleSearch=()=>{
    dispatch({type:"NEW_SEARCH",payload:{destination,startDate,endDate,options}})
    navigate('/hotels',{state:{destination,startDate,endDate,options}})
  }

  return <div className="searchTabs">
    <div className="toggle-tabs">
      <button className={toggleState===1?"tabs active-tabs":"tabs"} onClick={()=>toggleTab(1)}>Stays</button>
      <button className={toggleState===2?"tabs active-tabs":"tabs"}  onClick={()=>toggleTab(2)}>Flights</button>
      <button className={toggleState===3?"tabs active-tabs":"tabs"}  onClick={()=>toggleTab(3)}>Cars</button>
      <button className={toggleState===4?"tabs active-tabs":"tabs"} onClick={()=>toggleTab(4)}>Things to do</button>
    </div>
    <div className={toggleState===1?"tab-contents active-tab-contents":"tab-contents"} >
      <div className={style===1?"content content-pop":"content"} onMouseEnter={()=>changeStyle(1)} onMouseLeave={()=>setStyle(0)}>
        <div className="icon"><CiLocationArrow1/></div>
        <div>
        <input type="text" className="head" placeholder="Location" onChange={e=>setDestination(e.target.value)} />
          <p className="info">Where are you going?</p>
        </div>
      </div>
      <div className={style===2?"content content-pop":"content"} onMouseEnter={()=>changeStyle(2)} onMouseLeave={()=>setStyle(0)}>
        <span className="icon"><AiOutlineCalendar/></span>
        <div>
          <DatePicker selected={startDate}  minDate={new Date()} onChange={(date) => setStartDate(date)} placeholderText="Check In" className="head date-picker" />
          <p className="info">Select date</p>
        </div>
      </div>
      <div className={style===3?"content content-pop":"content"} onMouseEnter={()=>changeStyle(3)} onMouseLeave={()=>setStyle(0)}>
        <span className="icon"><AiOutlineCalendar/></span>
        <div>
          <DatePicker selected={endDate} minDate={new Date()} onChange={(date) => setEndDate(date)} placeholderText="Check Out" className="head date-picker" />
          <p className="info">Select date</p>
        </div>
      </div>
      <div className={style===4?"content content-pop":"content"} onMouseEnter={()=>changeStyle(4)} onMouseLeave={()=>setStyle(0)}>
        <span className="icon"><RxPerson/></span>
        <div>
          <p className="head" onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} Adult, ${options.children} Children, ${options.room} Room`}</p>
          <p className="info">Add guests</p>
          {openOptions && 
            <div className="options">
              <div className="options__Item">
                <span className="option__Text">Adult</span>
                <div className="option_count">
                  <button className="option__Counter" disabled={options.adult <= 1} onClick={()=>handleOption("adult","decrease")}>-</button>
                  <span className="option__CountNumber">{options.adult}</span>
                  <button className="option__Counter"  onClick={()=>handleOption("adult","increase")}>+</button>
                </div>
              </div>
              <div className="options__Item">
                <span className="option__Text">Children</span>
                <div className="option_count">
                  <button className="option__Counter" disabled={options.children <= 0} onClick={()=>handleOption("children","decrease")}>-</button>
                  <span className="option__CountNumber">{options.children}</span>
                  <button className="option__Counter"  onClick={()=>handleOption("children","increase")}>+</button>
                </div>
              </div>
              <div className="options__Item">
                <span className="option__Text">Room</span>
                <div className="option_count">
                  <button className="option__Counter" disabled={options.room <= 1} onClick={()=>handleOption("room","decrease")}>-</button>
                  <span className="option__CountNumber">{options.room}</span>
                  <button className="option__Counter"  onClick={()=>handleOption("room","increase")}>+</button>
                </div>
              </div>  
            </div>
          }
        </div>
      </div>
      <div className="search_icon" onClick={handleSearch}><BsSearch/></div>
    </div>
    <div className={toggleState===2?"tab-contents active-tab-contents":"tab-contents"} >
      <div className={style===5?"content content-pop":"content"} onMouseEnter={()=>changeStyle(5)} onMouseLeave={()=>setStyle(0)}>
        <div className="icon"><SlPlane/></div>
        <div>
        <input type="text" className="head" placeholder="Departure"/>
          <p className="info">Where are you?</p>
        </div>
      </div>
      <div className={style===6?"content content-pop":"content"} onMouseEnter={()=>changeStyle(6)} onMouseLeave={()=>setStyle(0)}>
        <span className="icon"><SlPlane/></span>
        <div>
        <input type="text" className="head" placeholder="Arrival"/>
          <p className="info">Where are you going?</p>
        </div>
      </div>
      <div className={style===7?"content content-pop":"content"} onMouseEnter={()=>changeStyle(7)} onMouseLeave={()=>setStyle(0)}>
        <span className="icon"><AiOutlineCalendar/></span>
        <div>
          <p className="head">Flight Date</p>
          <p className="info">Add date</p>
        </div>
      </div>
      <div className={style===8?"content content-pop":"content"} onMouseEnter={()=>changeStyle(8)} onMouseLeave={()=>setStyle(0)}>
        <span className="icon"><RxPerson/></span>
        <div>
          <p className="head">Travelers</p>
          <p className="info">Add guests</p>
        </div>
      </div>
      <div className="search_icon"><BsSearch/></div>
    </div>
    <div className={toggleState===3?"tab-contents active-tab-contents":"tab-contents"} >
      <div className={style===9?"content content-pop":"content"} onMouseEnter={()=>changeStyle(9)} onMouseLeave={()=>setStyle(0)}>
        <div className="icon"><CiLocationArrow1/></div>
        <div>
        <input type="text" className="head" placeholder="Origin"/>
          <p className="info">Where are you?</p>
        </div>
      </div>
      <div className={style===10?"content content-pop":"content"} onMouseEnter={()=>changeStyle(10)} onMouseLeave={()=>setStyle(0)}>
        <span className="icon"><CiLocationArrow1/></span>
        <div>
        <input type="text" className="head" placeholder="Destination"/>
          <p className="info">Where are you going?</p>
        </div>
      </div>
      <div className={style===11?"content content-pop":"content"} onMouseEnter={()=>changeStyle(11)} onMouseLeave={()=>setStyle(0)}>
        <span className="icon"><AiOutlineCalendar/></span>
        <div>
          <p className="head">Check Out</p>
          <p className="info">Add date</p>
        </div>
      </div>
      <div className={style===12?"content content-pop":"content"} onMouseEnter={()=>changeStyle(12)} onMouseLeave={()=>setStyle(0)}>
        <span className="icon"><RxPerson/></span>
        <div>
          <p className="head">Travelers</p>
          <p className="info">Add guests</p>
        </div>
      </div>
      <div className="search_icon"><BsSearch/></div>
    </div>
    <div className={toggleState===4?"tab-contents active-tab-contents":"tab-contents"} >
      <div className={style===13?"content content-pop":"content"} onMouseEnter={()=>changeStyle(13)} onMouseLeave={()=>setStyle(0)}>
        <div className="icon"><CiLocationArrow1/></div>
        <div>
          <input type="text" className="head" placeholder="City"/>
          <p className="info">Where are you going?</p>
        </div>
      </div>
      <div className={style===14?"content content-pop":"content"} onMouseEnter={()=>changeStyle(14)} onMouseLeave={()=>setStyle(0)}>
        <span className="icon"><MdOutlineSailing/></span>
        <div>
        <input type="text" className="head" placeholder="Activity"/>
          <p className="info">What are you doing?</p>
        </div>
      </div>
      <div className={style===15?"content content-pop":"content"} onMouseEnter={()=>changeStyle(15)} onMouseLeave={()=>setStyle(0)}>
        <span className="icon"><AiOutlineCalendar/></span>
        <div>
          <p className="head">When ?</p>
          <p className="info">Add date</p>
        </div>
      </div>
      <div className={style===16?"content content-pop":"content"} onMouseEnter={()=>changeStyle(16)} onMouseLeave={()=>setStyle(0)}>
        <span className="icon"><RxPerson/></span>
        <div>
          <p className="head">Travelers</p>
          <p className="info">Add guests</p>
        </div>
      </div>
      <div className="search_icon"><BsSearch/></div>
    </div>
  </div>;
}

export default SearchTabs;
