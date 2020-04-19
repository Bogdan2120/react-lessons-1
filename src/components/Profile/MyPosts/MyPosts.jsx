import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button></button>
            </div>
            <div className={s.posts}>
                <Post messeges='Hi!' like=' 20'/>
                <Post messeges='How do you do?' like=' 15'/>

            </div>
        </div>
    );
}

export default MyPosts;