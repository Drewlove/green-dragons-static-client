import React from 'react'
import ListItem from '../ReusableComponents/ListItem'

const ChallengeTypesListContainer = () => {
    
    const challengesList = [
        {name: 'Challenge 1', path: '/challenges/challenge-1', id: 1} 
    ]

    const renderList = () => {
        return challengesList.map(listItem => {
            return (
            <ListItem key={listItem.id} path={listItem.path}>
                {listItem.name}
                <div>Other Details</div>
            </ListItem>
            )
        })
    }
    
    return(
    <>
    <h1>Challenges</h1>
        {renderList()}
    </>
    )
}

export default ChallengeTypesListContainer