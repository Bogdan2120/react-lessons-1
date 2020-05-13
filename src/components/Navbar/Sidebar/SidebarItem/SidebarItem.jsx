import React from 'react';
import s from './SidebarItem.module.css';

const SidebarItem = (props) => {
    return (
        <div className={s.item}>
            <img src={props.image} alt={props.name}/>
        </div>
    );
}

export default SidebarItem;