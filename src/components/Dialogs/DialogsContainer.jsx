import React from "react";
import {add_Message_Creator, update_New_Text_Message_Creator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(add_Message_Creator());
    };

    let onMessageChange = (text) => {
        props.store.dispatch(update_New_Text_Message_Creator(text));
    };

    return ( <Dialogs updateNewTextMessage={onMessageChange}
                      onSendMessageClick={onSendMessageClick}
                      state={state}
            /> )
}

export default DialogsContainer;
