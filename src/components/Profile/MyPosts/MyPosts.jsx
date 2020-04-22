import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts =[
        {
            id: 1,
            message: 'Hi!',
            like: 25
        },
        {
            id: 2,
            message: 'How do you do?',
            like: 12
        }
        ];

    let postElement = posts.map(p => <Post messages={p.message} like={p.like}/>);

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
                { postElement }
            </div>
        </div>
    );
}

export default MyPosts;