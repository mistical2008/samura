import React from 'react';

const Users = (props) => {
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