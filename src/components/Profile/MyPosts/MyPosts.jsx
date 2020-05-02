import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const   MyPosts = (props) => {

    let postElement = props.posts.map(p => <Post messages={p.message} like={p.like}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };



    return (
        <div className={s.posts}>
            <h3> My post </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}>You post</textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postElement }
            </div>
        </div>
    );
}

export default MyPosts;