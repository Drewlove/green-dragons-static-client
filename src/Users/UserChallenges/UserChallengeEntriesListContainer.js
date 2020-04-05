import React from 'react'
import {withRouter} from 'react-router-dom'
import ListMainWrapper from '../../_Common/ListMainWrapper'

const UserChallengesListContainer = (props) => {

    const {users_id} = props.match.params

    const userChallengeEntriesList = [
        {challengeName: '1/2 Mile Run',entry: '2 min 00s', date: '03/01/20', user_challenges_id: 1}, 
        {challengeName: '1/2 Mile Run',entry: '1 min 50s', date: '03/11/20', user_challenges_id: 2},
        {challengeName: '1/2 Mile Run',entry: '1 min 45s', date: '03/21/20', user_challenges_id: 3},
        {challengeName: '1/2 Mile Run',entry: '1 min 35s', date: '03/28/20', user_challenges_id: 4}  
    ]

    return(
        <main>
        <section className='user-challenge-entries-challenge-title'>
            <h1>{userChallengeEntriesList[0].challengeName}</h1>
        </section>
        <ListMainWrapper
        rootPath={`/users/${users_id}/user-challenges`}
        tableName='user_challenges'
        listData={userChallengeEntriesList}
        propertiesToDisplay={['entry', 'date']} 
        listClassName='user-challenge-entries-list'
        />
        </main>
        )
}

export default withRouter(UserChallengesListContainer)