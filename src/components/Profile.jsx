import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://base.imgix.net/files/base/ebm/machinedesign/image/2019/04/machinedesign_16188_promo_eclipse.png?auto=format&fit=crop&h=432&w=768'/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                post
                <div>
                    new post
                </div>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;