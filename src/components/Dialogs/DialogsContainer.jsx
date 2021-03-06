import React from "react";
import {add_Message_Creator, update_New_Text_Message_Creator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {

   return  {
       dialogs: state.dialogsPage.dialogs,
       messages: state.dialogsPage.messages,
       newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(add_Message_Creator());
        },
        updateNewTextMessage: (text) => {
            dispatch(update_New_Text_Message_Creator(text))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
