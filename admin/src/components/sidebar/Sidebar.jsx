import React from 'react'
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import {Link} from "react-router-dom";
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{ textDecoration:"none" }}>
                <span className="logo">leoadminpro</span>
            </Link>
        </div>
        <hr />
        <div className="middle">
            <ul>
                <p className="title">Main</p>
                <Link to="/" style={{ textDecoration:"none" }}>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    </Link>
                <p className="title">Lists</p>
                <Link to="/users" style={{ textDecoration:"none" }}>
                    <li>
                            <PeopleIcon className="icon" />
                            <span>Users</span>
                    </li>
                </Link>
                <Link to="/hotels" style={{ textDecoration:"none" }}>
                    <li>
                        <Inventory2OutlinedIcon className="icon" />
                        <span>Hotels</span>
                    </li>
                </Link>
                <Link to="/rooms" style={{ textDecoration:"none" }}>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Rooms</span>
                    </li>
                </Link>

                <li>
                    <LocalShippingIcon className="icon" />
                    <span>Delivery</span>
                </li>
                <p className="title">System</p>
                <li>
                    <QueryStatsIcon className="icon" />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className="icon" />
                    <span>Notifications</span>
                </li>
                <li>
                    <HealthAndSafetyIcon className="icon" />
                    <span>System Health</span>
                </li>
                <p className="title">Users</p>
                <li>
                    <AccountCircleIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon" />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
           <div className="colorOptions"></div>
           <div className="colorOptions"></div>
        </div>
    </div>
  )
}

export default Sidebar