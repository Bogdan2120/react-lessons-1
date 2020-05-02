import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import DialogItem from "../Dialogs/DialogItem/DialogItem";

const Navbar = (props) => {

    let sidebarElement = props.state.sidebar.map(d => <Sidebar name={d.name}  image={d.image} />);

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
            <div className={s.onlineFriends}>
                <div className={s.heading}>
                    <span>My Friends</span>
                </div>
                {sidebarElement}
            </div>
        </div>
    );
}

export default Navbar;