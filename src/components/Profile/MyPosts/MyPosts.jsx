import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElement = props.posts.map(p => <Post messages={p.message} like={p.like} key={p.id}/>);
    let newPostElement = props.newPostText;

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts;