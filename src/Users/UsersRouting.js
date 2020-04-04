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

const UsersRouting = (props) => {

    const rootPath = `/users/:user_id`
    console.log(props, props.match.params)
    return(
    <>
        <Route exact path='/users/' component={UsersListContainer} />
        <Route path={`${rootPath}`} component={UserNavTabs}/>
        <Route exact path={`${rootPath}/challenges/`} component={UserChallengesListContainer}/>
        <Route exact path={`${rootPath}/challenges/:challenge_id`} component={UserChallengeEntriesListContainer}/>
        <Route path={`${rootPath}/challenge-entry/:challenge_entry_id`} component={UserChallengeEntryForm}/>
        <Route exact path={`${rootPath}/dragon-bucks/`} component={UserDragonBucksList}/>
        <Route path={`${rootPath}/dragon-bucks/:dragon_bucks_transaction_id`} component={UserDragonBucksForm}/>
        <Route path={`${rootPath}/profile`} component={UserFormProfile}/>
        <Route path={`${rootPath}/communities`} component={UserFormCommunities}/>
    </> 
    )
}

export default UsersRouting


