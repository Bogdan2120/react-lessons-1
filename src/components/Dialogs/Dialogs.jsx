import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogs = [
        {
            id: 1,
            name: 'Sasha'
        },
        {
            id: 2,
            name: 'Masha'
        },
        {
            id: 3,
            name: 'Vitya'
        },
        {
            id: 4,
            name: 'Katya'
        }
    ];

    let messages = [
        {
            id: 1,
            message: 'Hi!'
        },
        {
            id: 1,
            message: 'How do you do?'
        },
        {
            id: 1,
            message: 'Yo'
        }
    ];

    let dialogElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
                {/*<DialogItem name={dialogs[0].name} id={dialogs[0].id} />
                <DialogItem name={dialogs[1].name} id={dialogs[1].id} />
                <DialogItem name={dialogs[2].name} id={dialogs[2].id} />*/}
            </div>
            <div className={s.messages}>
                {messageElement}
                {/*<Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>*/}
            </div>
        </div>
    )
}

export default Dialogs;
