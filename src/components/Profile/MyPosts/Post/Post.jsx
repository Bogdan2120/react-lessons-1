import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://leclan.ru/wp-content/uploads/2010/01/avatar.jpg'/>
            post 1
            <div>
                <span>LIKE</span>
            </div>
        </div>
    );
}

export default Post;