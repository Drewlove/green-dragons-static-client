import React from 'react'
import {withRouter} from 'react-router-dom'
import ListMainWrapper from '../../_Common/ListMainWrapper'


const UserChallengesListContainer = (props) => {

    const {challenge_id} = props.match.params

    const userChallengeEntriesList = [
        {challengeName: '1/2 Mile Run',entry: '2 min 00s', date: '03/01/20', path: `${challenge_id}/challenge-entry/challenge-entry-1`, id: 1}, 
        {challengeName: '1/2 Mile Run',entry: '1 min 50s', date: '03/11/20', path: `${challenge_id}/challenge-entry/challenge-entry-2`, id: 2},
        {challengeName: '1/2 Mile Run',entry: '1 min 45s', date: '03/21/20', path: `${challenge_id}/challenge-entry/challenge-entry-3`, id: 3},
        {challengeName: '1/2 Mile Run',entry: '1 min 35s', date: '03/28/20', path: `${challenge_id}/challenge-entry/challenge-entry-4`, id: 4}  
    ]
    
    return(
        <>
        <header>
            <h1>{userChallengeEntriesList[0].challengeName}</h1>
        </header>
        <ListMainWrapper
        listData={userChallengeEntriesList}
        propertiesToDisplay={['entry', 'date']} 
        listClassName='user-challenge-entries-list'
        />
        </>
        )
}

export default withRouter(UserChallengesListContainer)