import React, { useContext, useState } from 'react'
import "./reserve.css";
import {AiOutlineClose} from "react-icons/ai"
import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext';
import axios from 'axios';
import toast from 'react-hot-toast';

export const Reserve = ({setOpen,hotelId}) => {
    const[selectedRooms,setSelectedRooms]=useState([]);
    const [checked, setChecked] = useState(false);
    const {data,loading,error}=useFetch(`/hotels/room/${hotelId}`);
    const{startDate,endDate}=useContext(SearchContext);
    
    const getDates = (start, end) => {
        let dates = [];
        let currentDate = new Date(start);
        let endDate = new Date(end);
    
        if (isNaN(currentDate.getTime()) || isNaN(endDate.getTime())) {
            toast.error('Invalid date format. Please use the format YYYY-MM-DD.');
            return;
        }
        while (currentDate <= endDate) {
           dates.push(new Date(currentDate).getTime());
           currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    };
    const allDates = (getDates(startDate,endDate));
    const isAvailable=(roomNumber)=>{
        const isFound=roomNumber.unavailableDates.some((date)=>
            allDates.includes(new Date(date).getTime())
        );
        return !isFound;
    }
    const handleSelect=(e)=>{
        const checked=e.target.checked;
        const value=e.target.value;
        setChecked(e.target.checked);
        setSelectedRooms(checked?[...selectedRooms,value]
            : selectedRooms.filter((item)=>item!==value));
    }
    const reserveRoom=async()=>{
        try{
            await Promise.all(selectedRooms.map(roomId=>{
                const res=axios.put(`/rooms/availability/${roomId}`,{dates:allDates})
                return res.data;
            }))
            toast.success('Room booked successfully!')
            setOpen(false);
        }
        catch(err){
            toast.error('Failed to book room!')
        }
    }
  return (
    <div className="reserve">
        <div className="reserveContainer">
            <AiOutlineClose className='closeIcon' onClick={()=>setOpen(false)}/>
            <span>Select your rooms</span>
            {data.map((item)=>(
                <div className="reserveItem">
                    <div className="reserveItemInfo">
                        <div className="rtitle">{item.title}</div>
                        <div className="rdesc"> {item.desc} </div>
                        <div className="rprice">Rs. {item.price} </div>
                        <div className="rmax">Max People: <b>{item.maxPeople}</b> </div>
                    </div>
                    <div className="rselectrooms">
                        {item.roomNumbers.map((roomNumber)=>(
                            <div className="room">
                                <label>{roomNumber.number}</label>
                                <input type="checkbox"  value={roomNumber._id} onChange={handleSelect} disabled={!isAvailable(roomNumber)}/>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <button onClick={reserveRoom} disabled={!checked} className="rNow">Reserve Now</button>
        </div>
    </div>
  )
}
