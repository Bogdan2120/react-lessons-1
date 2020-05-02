import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} image={d.image} status={d.status}/>);
    let messageElement = props.state.messages.map(m => <Message message={m.message}/>);


    let newMassageElement = React.createRef();
    let addMassage = () => {
        let text = newMassageElement.current.value;
        alert(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div className={s.addMessage}>
                    <textarea ref={newMassageElement}></textarea>
                    <button onClick={addMassage}>Add massage</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
