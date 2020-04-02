import React from 'react'
import ListItem from '../_Common/ListItem'

const ChallengeTypesListContainer = () => {
    
    const challengesList = [
        {name: 'Challenge 1', path: '/challenges/challenge-1', id: 1}, 
        {name: 'Challenge 2', path: '/challenges/challenge-2', id: 2},
        {name: 'Challenge 3', path: '/challenges/challenge-3', id: 3},
        {name: 'Challenge 4', path: '/challenges/challenge-4', id: 4}  
    ]

    const renderList = () => {
        return challengesList.map(listItem => {
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
        <h1>Challenges</h1>
    </header>
    <main className='challenge-types-main'>
        <ul className='list'>
        {renderList()}
        </ul>
    </main>
    </>
    )
}

export default ChallengeTypesListContainer
