import React from 'react'
import {Route, Switch} from 'react-router-dom'
import CommunitiesListContainer from './CommunitiesListContainer'
import CommunityForm from './CommunityForm'

const CommunitiesRouting = () => {
    return(
        <Switch>
            <Route path='/communities/:communities_id' component={CommunityForm} />
            <Route path='/communities' component={CommunitiesListContainer} />
        </Switch>
        )
    }

export default CommunitiesRouting