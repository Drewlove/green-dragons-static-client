import React from 'react'
import ListItem from '../ReusableComponents/ListItem'

const UsersListContainer = () => {
    const usersList = [
        {name: 'User 1', path: '/users/user-1', id: 1}, 
        {name: 'User 2', path: '/users/user-2', id: 2}, 
        {name: 'User 3', path: '/users/user-3', id: 3}
    ]

    const renderList = () => {
        return usersList.map( listItem => {
            return (
            <ListItem key={listItem.id} path={listItem.path}>
                {listItem.name}
            </ListItem>
            )
        })
    }
    
    return(
    <>
    <h1>Users</h1>
        {renderList()}
    </>
    )
}

export default UsersListContainer