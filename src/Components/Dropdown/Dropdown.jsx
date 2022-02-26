import React from 'react'
import './Dropdown.css'
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as Back} from '../../assets/icons/arrow.svg'

export const Dropdown = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  return (
    <div className='dropdown'>
       <CSSTransition 
       in = {activeMenu === 'main'} 
       unmountOnExit
       timeout={1000}
       classNames='menu-primary'
       >
           <div className="menu">
                <li className="list-item">
                    <a className="list-button">
                        Profile
                    </a>
                </li>
                <li className="list-item" onClick={()=>setActiveMenu('experience')}>
                    <a className="list-button">
                        Browse Stories
                    </a>
                </li>
                <hr className="divider" />
                <li className="list-item" >
                    <a className="list-button">
                        Settings
                    </a>
                </li>
                <li className="list-item">
                    <a className="list-button">
                        Logout
                    </a>
                </li>
           </div>
       </CSSTransition>

       <CSSTransition 
       in = {activeMenu === 'experience'} 
       unmountOnExit
       timeout={1000}
       classNames='menu-secondary'
       >
           <div className="menu">
                <li className="list-item" onClick={()=>setActiveMenu('main')}>
                    <a className="list-button">
                        <Back className='back-icon'/>
                    </a>
                </li>
                <li className="list-item" >
                    <a className="list-button">
                        Story by destination
                    </a>
                </li>
                <li className="list-item-party">
                    <a className="list-button">
                        Party Mode?
                    </a>
                </li>
                <hr className="divider" />
                <li className="list-item">
                    <a className="list-button">
                        Plan your trip
                    </a>
                </li>
           </div>
       </CSSTransition>
    </div>
  )
}
