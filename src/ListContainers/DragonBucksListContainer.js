import React from 'react'
import ListItem from '../ReusableComponents/ListItem'

const DragonBucksListContainer = () => {
    const dragonBucksList = [
        {amount: '$25.00', date: '03/01/2020', path: '/dragon-bucks/transaction-1', id: 1}, 
        {amount: '$15.00', date: '03/04/2020', path: '/dragon-bucks/transaction-2', id: 2}, 
        {amount: '$35.00', date: '03/06/2020', path: '/dragon-bucks/transaction-3', id: 3}
    ]

    const renderList = () => {
        return dragonBucksList.map(listItem => {
            return (
            <ListItem key={listItem.id} path={listItem.path}>
                <div>{listItem.amount}</div>
                <div>{listItem.date}</div>
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

export default DragonBucksListContainer