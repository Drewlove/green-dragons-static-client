import React from 'react'
import ListWrapper from '../_Common/ListWrapper'

const ChallengeTypesListContainer = () => {
    
    const challengesList = [
        {name: 'Challenge 1', path: '/challenges/challenge-1', id: 1}, 
        {name: 'Challenge 2', path: '/challenges/challenge-2', id: 2},
        {name: 'Challenge 3', path: '/challenges/challenge-3', id: 3},
        {name: 'Challenge 4', path: '/challenges/challenge-4', id: 4},
        {name: 'Challenge 5', path: '/challenges/challenge-5', id: 5},
        {name: 'Challenge 6', path: '/challenges/challenge-6', id: 6},
        {name: 'Challenge 7', path: '/challenges/challenge-7', id: 7},
        {name: 'Challenge 8', path: '/challenges/challenge-8', id: 8},
        {name: 'Challenge 9', path: '/challenges/challenge-9', id: 9}, 
        {name: 'Challenge 10', path: '/challenges/challenge-10', id: 10},
    ]
    
    return(
        <>
        <main>
            <ListWrapper 
            listData={challengesList}
            propertiesToDisplay={['name']} 
            listClassName='challenges-list'
            />
        </main>
        </>
    )
}

export default ChallengeTypesListContainer
