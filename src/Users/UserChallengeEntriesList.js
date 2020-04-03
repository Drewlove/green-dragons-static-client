import React from 'react'
import {withRouter} from 'react-router-dom'
import ListContainer from '../_Common/ListContainer'


const UserChallengesList = (props) => {

    const {user_id, challenge_id} = props.match.params

    const userChallengeEntriesList = [
        {challengeName: '1/2 Mile Run',entry: '2 min 0s', date: '03/01/20', path: `/users/${user_id}/challenges/${challenge_id}/challenge-entry-1`, id: 1}, 
        {challengeName: '1/2 Mile Run',entry: '1 min 50s', date: '03/11/20', path: `/users/${user_id}/challenges/${challenge_id}/challenge-entry-2`, id: 2},
        {challengeName: '1/2 Mile Run',entry: '1 min 45s', date: '03/21/20', path: `/users/${user_id}/challenges/${challenge_id}/challenge-entry-3`, id: 3},
        {challengeName: '1/2 Mile Run',entry: '1 min 35s', date: '03/28/20', path: `/users/${user_id}/challenges/${challenge_id}/challenge-entry-4`, id: 4}  
    ]
    
    return(
        <>
        <ListContainer 
        header={userChallengeEntriesList[0].challengeName}
        listData={userChallengeEntriesList}
        propertiesToDisplay={['entry', 'date']} 
        listClassName='user-challenge-entries-list'
        />
        </>
        )
}

export default withRouter(UserChallengesList)