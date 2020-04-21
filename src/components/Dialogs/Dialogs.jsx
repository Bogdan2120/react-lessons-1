import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialog/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Messege = (props) => {
    return (
        <div className={s.messege}>
            {props.messege}
        </div>
    )
}


const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Sasha' id='1'/>
                <DialogItem name='Masha' id='2'/>
                <DialogItem name='Vitya' id='3'/>
                <DialogItem name='Katya' id='4'/>
            </div>
            <div className={s.messeges}>
                <Messege messege='Hi!'/>
                <Messege messege='How do you do?'/>
                <Messege messege='Yo'/>
            </div>
        </div>
    )
}
export default Dialogs;
