import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://leclan.ru/wp-content/uploads/2010/01/avatar.jpg'/>
            {props.messeges}
            <div>
                <span>LIKE</span>
                <span>{props.like}</span>
            </div>
        </div>
    );
}

export default Post;