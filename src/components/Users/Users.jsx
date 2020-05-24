import React from "react";
import s from "./Users.module.css"

let Users = (props) => {
    if (props.users.length === 0) {
     props.setUsers([
            {
                id: 1,
                avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/19/EP1661-CUSA11738_00-AV00000000000022/image?_version=00_09_000&platform=chihiro&w=330&h=330&bg_color=000000&opacity=100',
                fullName: 'Anton',
                status: 'Student',
                followed: true,
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 2,
                avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/19/EP1661-CUSA11738_00-AV00000000000022/image?_version=00_09_000&platform=chihiro&w=330&h=330&bg_color=000000&opacity=100',
                fullName: 'Vika',
                status: 'Boss',
                followed: false,
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/19/EP1661-CUSA11738_00-AV00000000000022/image?_version=00_09_000&platform=chihiro&w=330&h=330&bg_color=000000&opacity=100',
                fullName: 'Artur',
                status: 'Barder',
                followed: true,
                location: {city: 'Lviv', country: 'Ukraine'}
            }
        ])
    }

    return (
        <div className={s.container}>
            {
                props.users.map(u => <div className={s.userItem} key={u.id}>
                    <div className={s.avatar}>
                        <img src={u.avatar} alt={u.fullName}/>
                    </div>
                    <div className={s.information}>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                        <div>
                            <span>City: {u.location.city} </span>
                            <span>Country: {u.location.country}</span>
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
    )
}
export default Users;