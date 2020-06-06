import React from "react";
import s from "./Users.module.css";
import userImg from "../../assets/images/user.jpg";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let page = [];
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i);
    }
    return <div className={s.container}>
        <div>
            {
                page.map(p => {
                    return <span className={`${props.currentPage === p && s.selectedActivePage} ${s.selectedPage}`}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })
            }
        </div>
        {
            props.users.map(u => <div className={s.userItem} key={u.id}>
                <div className={s.avatar}>
                    <img src={u.photos.small != null ? u.photos.small : userImg} alt={u.name}/>
                </div>
                <div className={s.information}>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>
                        <span>City: {"u.location.city"} </span>
                        <span>Country: {"u.location.country"}</span>
                    </div>
                </div>
                <div className={s.button}>
                    {u.followed ?
                        <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </div>)
        }
    </div>
}

export default Users;