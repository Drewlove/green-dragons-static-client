import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ChallengeTypesListwrapper from './ChallengeTypesListContainer'
import ChallengeTypeForm from './ChallengeTypeForm'

const ChallengeTypesRouting = () => {
    return(
        <Switch>
            <Route path='/challenges/:challenges_id' component={ChallengeTypeForm} />
            <Route path='/challenges' component={ChallengeTypesListwrapper} />
        </Switch>
        )
    }

export default ChallengeTypesRouting