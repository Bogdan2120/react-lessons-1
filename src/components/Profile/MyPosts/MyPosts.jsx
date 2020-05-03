import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const   MyPosts = (props) => {

    let postElement = props.posts.map(p => <Post messages={p.message} like={p.like}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewTextPost(text);
        }

    return (
        <div className={s.posts}>
            <h3> My post </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText} />
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