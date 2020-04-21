import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profileSaver}>
                <img
                    src='https://base.imgix.net/files/base/ebm/machinedesign/image/2019/04/machinedesign_16188_promo_eclipse.png?auto=format&fit=crop&h=432&w=768'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;