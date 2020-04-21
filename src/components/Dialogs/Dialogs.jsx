import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Masha
                </div>
                <div className={s.dialog}>
                    Vitya
                </div>
                <div className={s.dialog}>
                    Katya
                </div>
            </div>
            <div className={s.messeges}>
                <div className={s.messege}>Hi!</div>
                <div className={s.messege}>How do you do?</div>
                <div className={s.messege}>Yo</div>
            </div>
        </div>
    )
}
export default Dialogs;
