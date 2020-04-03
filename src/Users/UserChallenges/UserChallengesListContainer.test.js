import React from 'react'
import ReactDOM from 'react-dom'
import UserChallengesListContainer from './UserChallengesListContainer'

describe('User Challenges List Container', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <UserChallengesListContainer />, 
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})
