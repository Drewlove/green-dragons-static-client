import React from 'react'
import ListMainWrapper from '../../_Common/ListMainWrapper'

const UserDragonBucksListContainer = () => {
    
    const userDragonBucksList = [
        {amount: '$25.00', date: '03/01/2020', path: 'dragon-bucks/1', id: 1}, 
        {amount: '$25.00', date: '03/11/2020', path: 'dragon-bucks/2', id: 2},
        {amount: '$25.00', date: '03/21/2020', path: 'dragon-bucks/3', id: 3},
        {amount: '$-10.00', date: '03/27/2020', path: 'dragon-bucks/4', id: 4}  
    ]
    
    return(
        <>
        <ListMainWrapper  
        listData={userDragonBucksList}
        propertiesToDisplay={['amount', 'date']} 
        listClassName='user-dragon-bucks-list'
        />
        </>
        )
}

export default UserDragonBucksListContainer
