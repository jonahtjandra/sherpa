import React from 'react'
import './Topbar.css'

import { FaSistrix } from 'react-icons/fa';
import { useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { Link } from "react-router-dom";

export const Topbar = () => {

    const [open, setOpen] = useState(false)
    document.onclick = (e) => {
        console.log(e.target.className)
        if (e.target.className != 'profile-nav-wrapper' && e.target.className != 'profile-pic' && e.target.className != 'list-item' && e.target.className != 'list-button') {
            setOpen(false)
        }
    }
    return (
        <div className='topbar'>
            <div className="logo-wrapper">
                <Link to="/" id="link">
                    <div className="logo">
                        SHERPA 🐑
                    </div>
                    [ sher-puh ]
                </Link>
            </div>

            <div className="search">
                <div className="search-wrapper">
                    <input type="text" placeholder='Find a story' className="searchbar" />
                    <FaSistrix className='icon' />
                </div>
            </div>
            <div className="topbar-right">
                <Link to="/story" id="link">
                    <div id="text-wrapper">
                        <div className="create-experience">Create your Story ✍️</div>
                    </div>
                </Link>
                <div className="nav-container">
                    <div className="profile-nav-wrapper" onClick={() => setOpen(!open)}>
                        <img src="jonah.jpg" alt="" className="profile-pic" />
                    </div>
                    {open && <Dropdown />}
                </div>
            </div>
        </div>
    )
}
