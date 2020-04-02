import React from 'react'
import {Route, Switch} from 'react-router-dom'
import UsersListContainer from './UsersListContainer'
import UserPage from './UserPage'

const UsersRouting = () => {
    return(
        <Switch>
            <Route path='/users/:user_id/' component={UserPage} />
            <Route path='/users/' component={UsersListContainer} />
        </Switch>
        )
    }

export default UsersRouting