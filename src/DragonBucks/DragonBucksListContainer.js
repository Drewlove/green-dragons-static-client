import React from 'react'
import ListItem from '../_Common/ListItem'

const DragonBucksListContainer = () => {
    
    const dragonBucksList = [
        {amount: '$25.00', date: '03/01/2020', path: 'dragon-bucks/1', id: 1}, 
        {amount: '$25.00', date: '03/11/2020', path: 'dragon-bucks/2', id: 2},
        {amount: '$25.00', date: '03/21/2020', path: 'dragon-bucks/3', id: 3},
        {amount: '$-10.00', date: '03/27/2020', path: 'dragon-bucks/4', id: 4}  
    ]

    const renderList = () => {
        return dragonBucksList.map(listItem => {
            return (
            <ListItem key={listItem.id} path={listItem.path}>
                {listItem.name}
            </ListItem>
            )
        })
    }
    
    return(
    <>
    <header>
        <h1>Dragon Bucks</h1>
        <h2>Balance</h2>
    </header>
    <main className='dragon-bucks-main'>
        <ul className='list'>
        {renderList()}
        </ul>
    </main>
    </>
    )
}

export default DragonBucksListContainer
