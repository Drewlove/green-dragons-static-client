import React from 'react'
import {Route} from 'react-router-dom'
import UsersListContainer from './UsersListContainer'
import UserNavTabs from './UserNavTabs'
import UserFormProfile from './UserFormProfile'
import UserFormCommunities from './UserFormCommunities'

const UsersRouting = () => {
    return(
        <>
            <Route exact path='/users/' component={UsersListContainer} />
            <Route path='/users/:user_id' component={UserNavTabs}/>
            <Route path='/users/:user_id/profile' component={UserFormProfile}/>
            <Route path='/users/:user_id/communities' component={UserFormCommunities}/>
        </>
        )
    }

export default UsersRouting