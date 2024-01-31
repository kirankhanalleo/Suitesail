import React, { useState } from 'react'
import "./NewHotel.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import useFetch from '../../hooks/useFetch';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import axios from 'axios';

const NewHotel=({inputs,title})=> {
  const{data,loading,error}=useFetch("/rooms")
  const[files,setFiles]=useState("");
  const[info,setInfo]=useState({})
  const[rooms,setRooms]=useState({})

  const handleChange=(e)=>{
    setInfo((prev)=>({...prev,[e.target.id]:e.target.value}))
  }
  const handleSelect=(e)=>{
    const value = Array.from(e.target.selectedOptions,(option)=>option.value);
    setRooms(value)
  }

  const handleClick=async(e)=>{
    e.preventDefault()
    try{
      const list = await Promise.all(
        Object.values(files).map(async(file)=>{
        const data = new FormData()
        data.append("file",file)
        data.append("upload_preset","suitesailUpload")
        const uploadResponse = await axios.post("https://api.cloudinary.com/v1_1/dzyvsomxa/image/upload",list);
        const {url}=uploadResponse
        return url
      }));
      const newHotel={
        ...info,rooms,photos:list,
      }
      await axios.post("/hotels",newHotel)
    }
    catch(err){

    }
  }

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src = { files?URL.createObjectURL(files[0]):
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" 
              } 
              alt="avatar" 
              className="avatarImg" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon"/>
                </label>
                <input type="file" id="file" multiple
                  onChange={e=>setFiles(e.target.files)} 
                  style={{ display:"none" }}
                />
              </div>
              {inputs.map((input)=>(
                <div className="formInput" key={input.id}>
                 <label>{input.label}</label>
                 <input type={input.type} placeholder={input.placeholder} id={input.id} onChange={handleChange} />
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
              <div className="selectRooms">
                <label>Select Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading?"loading":data&&data.map(room=>(
                    <option value={room._id} key={room._id}>{room.title}</option>
                  ))}
                </select>
              </div>
              <button onClick={handleClick}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NewHotel
