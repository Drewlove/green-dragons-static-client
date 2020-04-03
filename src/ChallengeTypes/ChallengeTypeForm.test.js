import React from 'react'
import ReactDOM from 'react-dom'
import ChallengeTypeForm from '../ChallengeTypeForm'

describe('Challenge Type Form', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <ChallengeTypeForm />, 
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})
