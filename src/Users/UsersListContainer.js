import React from 'react'
import ListContainer from '../_Common/ListContainer'

const UsersListContainer = () => {
    const usersList = [
        {name: 'User 1', path: '/users/user-1', id: 1}, 
        {name: 'User 2', path: '/users/user-2', id: 2}, 
        {name: 'User 3', path: '/users/user-3', id: 3}
    ]
    
    return(
        <ListContainer 
        title='Users' 
        listData={usersList}
        propertiesToDisplay={['name']} 
        listClassName='users-list'
        />
    )
}

export default UsersListContainer