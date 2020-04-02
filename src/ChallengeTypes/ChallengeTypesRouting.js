import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ChallengeTypesListContainer from './ChallengeTypesListContainer'
import ChallengeTypeForm from './ChallengeTypeForm'

const ChallengeTypesRouting = () => {
    return(
        <Switch>
            <Route path='/challenges/:challenge_id' component={ChallengeTypeForm} />
            <Route path='/challenges' component={ChallengeTypesListContainer} />
        </Switch>
        )
    }

export default ChallengeTypesRouting