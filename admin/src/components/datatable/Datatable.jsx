import React, { useEffect, useState } from 'react'
import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import {Link, useLocation} from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import axios from 'axios';

const Datatable = ({columns,title}) => {
  const location = useLocation()
  const path = location.pathname.split("/")[1]
  const[list,setList]=useState("")
  const{data,error,loading}=useFetch(`/${path}`)

  useEffect(()=>{
    setList(data)
  },[data])

  const handleDelete=async(id)=>{
    try{
      await axios.delete(`/${path}/${id}`)
      setList(list.filter(item=>item._id!==id))
    }
    catch{}
  };
    const actionColumn =[
        { field:"action",headerName:"Action",width:200, renderCell:(params)=>{
            return(
                <div className="actionColumn">
                  <Link to="/users/test" style={{ textDecoration:"none" }}>
                    <div className="viewButton">View</div>
                  </Link>
                    <div className="deleteButton" onClick={()=>handleDelete(params.row._id)}>Delete</div>
                </div>
            )
        } }
    ]

    return (
    <div className='datatable'>
      <div className="datatableTitle">
        <h1>{title} List</h1>
        <Link to={`/${path}/new`} className='link'>
          Add New
        </Link>
      </div>
         <DataGrid
        rows={list}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={(row)=>row._id}
      />
    </div>
  )
}

export default Datatable