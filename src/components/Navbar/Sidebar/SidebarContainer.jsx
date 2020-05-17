import React from 'react';
import Sidebar from "./Sidebar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        navbarPage: state.navbarPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)
export default SidebarContainer;