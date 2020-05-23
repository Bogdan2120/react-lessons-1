import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElement = props.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} image={d.image} status={d.status} key={d.id}/>);
    let messageElement = props.messages.map(m =>
        <Message message={m.message} key={m.id}/>);
    let newMassageElement = props.newMessageText;


    let onAddMessage = () => {
        props.onSendMessageClick();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewTextMessage(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div className={s.addMessage}>
                    <textarea onChange={onMessageChange}
                              value={newMassageElement}
                              placeholder='Enter your massage'
                    />
                    <button onClick={onAddMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
