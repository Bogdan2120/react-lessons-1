import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://base.imgix.net/files/base/ebm/machinedesign/image/2019/04/machinedesign_16188_promo_eclipse.png?auto=format&fit=crop&h=432&w=768'/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;