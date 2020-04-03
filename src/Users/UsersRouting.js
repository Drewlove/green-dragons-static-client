import React from 'react'
import {Route} from 'react-router-dom'
import UsersListContainer from './UsersListContainer'
import UserNavTabs from './UserNavTabs'
import UserFormProfile from './UserProfileAndCommunities/UserFormProfile'
import UserFormCommunities from './UserProfileAndCommunities/UserFormCommunities'
import UserChallengesListContainer from './UserChallenges/UserChallengesListContainer'
import UserChallengeEntriesListContainer from './UserChallenges/UserChallengeEntriesListContainer'
import UserChallengeEntryForm from './UserChallenges/UserChallengeEntryForm'
import UserDragonBucksList from './UserDragonBucks/UserDragonBucksListContainer'
import UserDragonBucksForm from './UserDragonBucks/UserDragonBucksForm'

const UsersRouting = () => {
    return(
    <>
        <Route exact path='/users/' component={UsersListContainer} />
        <Route path='/users/:user_id' component={UserNavTabs}/>
        <Route exact path='/users/:user_id/challenges/' component={UserChallengesListContainer}/>
        <Route exact path='/users/:user_id/challenges/:challenge_id' component={UserChallengeEntriesListContainer}/>
        <Route path='/users/:user_id/challenges/:challenge_id/challenge-entry/:challenge_entry_id' component={UserChallengeEntryForm}/>
        <Route exact path='/users/:user_id/dragon-bucks/' component={UserDragonBucksList}/>
        <Route path='/users/:user_id/dragon-bucks/:dragon_bucks_transaction_id' component={UserDragonBucksForm}/>
        <Route path='/users/:user_id/profile' component={UserFormProfile}/>
        <Route path='/users/:user_id/communities' component={UserFormCommunities}/>
    </> 
    )
}

export default UsersRouting


