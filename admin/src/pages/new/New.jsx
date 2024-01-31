import React, { useState } from 'react'
import "./New.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import axios from "axios"

const New=({inputs,title})=> {
  const[file,setFile]=useState("");
  const[info,setInfo]=useState({})

  const handleChange=(e)=>{
    setInfo((prev)=>({...prev,[e.target.id]:e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append("file",file)
    data.append("upload_preset","suitesailUpload")
    try{
      const uploadResponse = await axios.post("https://api.cloudinary.com/v1_1/dzyvsomxa/image/upload",data);
      const {url}=uploadResponse.data
      const newUser={
        ...info,
        img:url
      }
      await axios.post("/auth/register",newUser)
    }
    catch(err){
      console.log(err)
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
              src = { file?URL.createObjectURL(file):
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
                <input type="file" id="file" 
                  onChange={e=>setFile(e.target.files[0])} 
                  style={{ display:"none" }}
                />
              </div>
              {inputs.map((input)=>(
                 <div className="formInput" key={input.id}>
                 <label>{input.label}</label>
                 <input type={input.type} placeholder={input.placeholder} 
                 onChange={handleChange} 
                 id={input.id}
                 />
               </div>
              ))}
              <button onClick={handleClick} >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default New
