import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

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

/*
    let postElement = posts.map(p => <Post messages={p.message} like={p.like}/>);
*/
    let postElement = posts.map(p => <MyPosts messages={p.message} like={p.like}/>);

    return (
        <div>
            <ProfileInfo/>
            {/*<MyPosts />*/}
            {postElement}
        </div>
    );
}

export default Profile;