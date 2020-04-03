import React from 'react'
import {Route, Switch} from 'react-router-dom'
import UsersListContainer from './UsersListContainer'
import UserNavTabs from './UserNavTabs'
import UserFormProfile from './UserFormProfile'
import UserFormCommunities from './UserFormCommunities'
import UserChallengesList from './UserChallengesList'
import UserChallengeEntriesList from './UserChallengeEntriesList'

const UsersRouting = () => {
    return(
        <>
            <Route exact path='/users/' component={UsersListContainer} />
            <Route path='/users/:user_id' component={UserNavTabs}/>
            <Route exact path='/users/:user_id/challenges' component={UserChallengesList}/>
            <Route path='/users/:user_id/challenges/:challenge_id' component={UserChallengeEntriesList}/>
            <Route path='/users/:user_id/profile' component={UserFormProfile}/>
            <Route path='/users/:user_id/communities' component={UserFormCommunities}/>
        </>
        )
    }

export default UsersRouting