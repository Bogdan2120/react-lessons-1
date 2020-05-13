import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {add_Post_Creator, update_New_Text_Post_Creator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let postElement = props.posts.map(p => <Post messages={p.message} like={p.like}/>);
    let newPostElement = props.newPostText;

    let addPost = () => {
        props.dispatch(add_Post_Creator());
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(update_New_Text_Post_Creator(text));
    };

    return (
        <div className={s.posts}>
            <h3> My post </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={newPostElement}
                              placeholder='Enter your post'
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts;