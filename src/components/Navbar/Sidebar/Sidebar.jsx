import React from 'react';
import s from './Sidebar.module.css';
import SidebarItem from "./SidebarItem/SidebarItem";



const Sidebar = (props) => {
    let sidebarElement = props.navbarPage.sidebar.map(d => <SidebarItem name={d.name}  image={d.image} />);

    return (
        <div className={s.onlineFriends}>
            <div className={s.heading}>
                <span>My Friends</span>
            </div>
            {sidebarElement}
        </div>
    );
}

export default Sidebar;