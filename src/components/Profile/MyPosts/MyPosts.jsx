import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <h3> My post </h3>
            <div>
                <div>
                    <textarea>You post</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post messeges='Hi!' like=' 20'/>
                <Post messeges='How do you do?' like=' 15'/>

            </div>
        </div>
    );
}

export default MyPosts;