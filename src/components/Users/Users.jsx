import React from "react";
import s from "./Users.module.css"
import * as axios from "axios";
import userImg from "../../assets/images/user.jpg"


class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                debugger;
                this.props.setUsers(response.data.items)
            } )
    }

    render() {
        return (
            <div className={s.container}>
                {
                    this.props.users.map(u => <div className={s.userItem} key={u.id}>
                        <div className={s.avatar}>
                            <img src={ u.photos.small !=null ? u.photos.small : userImg } alt={u.name}/>
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
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                   this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>)
                }
            </div>
        )
    }
}


export default Users;