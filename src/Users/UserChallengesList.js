import React from 'react'
import {withRouter} from 'react-router-dom'
import ListContainer from '../_Common/ListContainer'


const UserChallengesList = (props) => {

    const user_id = props.match.params.user_id

    const userChallengesList = [
        {name: 'Challenge 1', path: `/users/${user_id}/challenges/challenge-1`, id: 1}, 
        {name: 'Challenge 2', path: `/users/${user_id}/challenges/challenge-2`, id: 2},
        {name: 'Challenge 3', path: `/users/${user_id}/challenges/challenge-3`, id: 3},
        {name: 'Challenge 4', path: `/users/${user_id}/challenges/challenge-4`, id: 4}  
    ]
    
    return(
        <>
        <ListContainer 
        listData={userChallengesList}
        propertiesToDisplay={['name']} 
        listClassName='user-challenges-list'
        />
        </>
        )
}

export default withRouter(UserChallengesList)