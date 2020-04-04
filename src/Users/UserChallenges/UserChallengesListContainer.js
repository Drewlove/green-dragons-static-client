import React from 'react'
import ListMainWrapper from '../../_Common/ListWrapper'


const UserChallengesListContainer = () => {

    const userChallengesList = [
        {name: 'Challenge 1', path: `challenges/challenge-1`, id: 1}, 
        {name: 'Challenge 2', path: `challenges/challenge-2`, id: 2},
        {name: 'Challenge 3', path: `challenges/challenge-3`, id: 3},
        {name: 'Challenge 4', path: `challenges/challenge-4`, id: 4}  
    ]
    
    return(
        <main>
            <ListMainWrapper 
            listData={userChallengesList}
            propertiesToDisplay={['name']} 
            listClassName='user-challenges-list'
            />
        </main>
        )
}

export default UserChallengesListContainer