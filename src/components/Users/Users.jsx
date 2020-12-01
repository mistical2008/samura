import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatarUrl: "http://cliparts101.com/files/367/63BA654AECB7FD26A32D08915C923030/avatar_nick.png",
                fullName: "Dmitriy K.",
                description: "Hi! I like to live!",
                followed: false,
                location: {
                    city: "Минск",
                    country: "Беларусь",
                },
            },
        ])
    }

    console.log(props)
    const usersElements = props.users.map(user => <div>
                <img src={user.avatarUrl} alt={user.fullName} className={s.avatar} />
                <ul className={s.userInfo}>
                    <li className={s.infoItem}>
                        <h3 className={s.fullName}>{user.fullName}</h3>
                        <span>{user.description}</span>
                    </li>
                    <li className={s.infoItem}>
                        <span className={s.infoGeo}>{user.location.country}</span>
                        <span className={s.infoGeo}>{user.location.city}</span>
                    </li>
                </ul>
            </div>
    )
    return (
        <div>
            {usersElements}
        </div>
    )
}

export default Users;