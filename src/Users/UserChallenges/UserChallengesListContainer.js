import React from 'react'
import {withRouter} from 'react-router-dom'
import ListMainWrapper from '../../_Common/ListMainWrapper'

const UserChallengesListContainer = (props) => {

    const {users_id} = props.match.params

    const userChallengesList = [
        {name: 'Challenge 1', challenges_id: 1}, 
        {name: 'Challenge 2', challenges_id: 2},
        {name: 'Challenge 3', challenges_id: 3},
        {name: 'Challenge 4', challenges_id: 4}  
    ]

    return(
        <main>
            <ListMainWrapper 
            rootPath={`/users/${users_id}/challenges`}
            tableName='challenges'
            listData={userChallengesList}
            propertiesToDisplay={['name']} 
            listClassName='user-challenges-list'
            />
        </main>
        )
}

export default withRouter(UserChallengesListContainer)