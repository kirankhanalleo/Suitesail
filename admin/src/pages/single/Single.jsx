import React from 'react'
import "./Single.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';

export default function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="data:image/png;base64,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" alt="" className="itemImage" />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@email.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+977 9823009450</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Kvt St. 12, Mechinagar Mun. Jhapa</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Nepal</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <Table /> 
        </div>
      </div>
    </div>
  )
}
