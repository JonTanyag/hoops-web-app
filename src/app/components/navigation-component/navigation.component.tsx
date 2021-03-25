import React, {useState} from "react";
import { Link } from 'react-router-dom';
import * as FAIcons from "react-icons/fa";
import * as AIIcons from "react-icons/ai";
import * as RIIcons from "react-icons/ri";

import {SideBarItems} from '../../../shared/data/nav.data'
import './navigation-component.scss';
import { IconContext } from 'react-icons';


export const Navigation: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FAIcons.FaBars onClick={showSidebar}/>
            </Link>

            <Link to="#" className="right-menu">
                <RIIcons.RiAccountPinCircleFill />
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                <span className="nav-header">Company Name</span>
                    <Link to='#' className="menu-bars">
                        <AIIcons.AiOutlineClose />
                    </Link>
                </li>
                {SideBarItems.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}