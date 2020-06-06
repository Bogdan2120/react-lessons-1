import React from "react";
import s from "./Users.module.css"
import * as axios from "axios";
import userImg from "../../assets/images/user.jpg"


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)

            } )
    }

    onPageChanged = (numberPage) => {
        this.props.setCurrentPage(numberPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${numberPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
    })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let page = [];
        for (let i=1; i <= pagesCount; i++) {
            page.push(i);
        }

        return (
            <div className={s.container}>
                <div>
                    {
                        page.map(p => {
                            return <span className={this.props.currentPage === p && s.selectedPage}
                            onClick={() => {this.onPageChanged(p)}}>{p}</span>
                        })
                    }
                </div>
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