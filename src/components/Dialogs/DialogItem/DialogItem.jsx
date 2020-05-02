import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <div className={s.item}>
                <img src={props.image} alt={props.name}/>
                <NavLink to={path} activeClassName={s.active}> {props.name} </NavLink>
                <span className={s.status}>{props.status}</span>
            </div>
        </div>
    )
}


export default DialogItem;
