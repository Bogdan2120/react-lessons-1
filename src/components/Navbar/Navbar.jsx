import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SidebarContainer from "./Sidebar/SidebarContainer";

const Navbar = (props) => {
    return (
        <div className={s.nav}>
            <nav>
                <div className={s.item}>
                    <NavLink exact to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink exact to="/dialogs" activeClassName={s.activeLink}>Massages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
                </div>
            </nav>
           <SidebarContainer store={props.store}/>
        </div>
    );
}

export default Navbar;