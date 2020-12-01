import React from 'react';

const Users = (props) => {
    console.log(props)
    const usersElements = props.users.map(user => <div>
                <img src={user.avatarUrl} alt={user.fullName} />
                <ul>
                    <li>{user.fullName}</li>
                    <li>{user.description}</li>
                    <li>
                        <span>{user.location.country}</span>
                        <span>{user.location.city}</span>
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