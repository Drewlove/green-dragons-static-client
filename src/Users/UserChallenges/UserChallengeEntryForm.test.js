import React from 'react'
import ReactDOM from 'react-dom'
import UserChallengeEntryForm from './UserChallengeEntryForm'

describe('User Challenge Entries List Container', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <UserChallengeEntryForm />,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})