import React from 'react';
import {add_Post_Creator, update_New_Text_Post_Creator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(add_Post_Creator());
    };

    let onPostChange = (text) => {
        let action = update_New_Text_Post_Creator(text)
        props.store.dispatch(action);
    };

    return (
       <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                posts={state.posts}
                newPostText={state.newPostText}
       />
    );
}

export default MyPostsContainer ;