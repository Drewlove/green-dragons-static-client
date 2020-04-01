import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ChallengeTypesListContainer from '../ListContainers/ChallengeTypesListContainer'
import ChallengesForm from '../Forms/ChallengesForm'

const ChallengesRouting = () => {
    return(
        <Switch>
            <Route path='/challenges/:challenge_id' component={ChallengesForm} />
            <Route path='/challenges' component={ChallengeTypesListContainer} />
        </Switch>
        )
    }

export default ChallengesRouting