import React from 'react'
import {Route} from 'react-router-dom'
import UsersListContainer from './UsersListContainer'
import UserFormProfile from './UserFormsProfileAndCommunities/UserFormProfile'
import UserFormCommunities from './UserFormsProfileAndCommunities/UserFormCommunities'
import UserChallengesListContainer from './UserChallenges/UserChallengesListContainer'
import UserChallengeEntriesListContainer from './UserChallenges/UserChallengeEntriesListContainer'
import UserChallengeEntryForm from './UserChallenges/UserChallengeEntryForm'
import UserDragonBucksList from './UserDragonBucks/UserDragonBucksListContainer'
import UserDragonBucksForm from './UserDragonBucks/UserDragonBucksForm'

const UsersRouting = (props) => {

    const rootPath = `/users/:users_id`
    return(
    <>
        <Route exact path='/users/' component={UsersListContainer} />
        <Route path={`${rootPath}/profile`} component={UserFormProfile}/>
        <Route path={`${rootPath}/communities`} component={UserFormCommunities}/>
        <Route exact path={`${rootPath}/challenges/`} component={UserChallengesListContainer}/>
        <Route path={`${rootPath}/challenges/:challenges_id`} component={UserChallengeEntriesListContainer}/>
        <Route path={`${rootPath}/user-challenges/:user_challenges_id`} component={UserChallengeEntryForm}/>
        <Route exact path={`${rootPath}/dragon-bucks/`} component={UserDragonBucksList}/>
        <Route path={`${rootPath}/dragon-bucks/:dragon_bucks_id`} component={UserDragonBucksForm}/>
    </> 
    )
}

export default UsersRouting


