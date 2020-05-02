import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return (
        <div className={s.item}>
            <img src={props.image} alt={props.name}/>
        </div>
    );
}

export default Sidebar;