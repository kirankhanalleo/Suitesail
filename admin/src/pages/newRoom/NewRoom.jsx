import React, { useState } from 'react'
import "./NewRoom.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const NewRoom=({inputs,title})=> {
  const[file,setFile]=useState("");
  // console.log(file);

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
                 <input type={input.type} placeholder={input.placeholder} />
               </div>
              ))}
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NewRoom
