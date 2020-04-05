import React from 'react'
import ReactDOM from 'react-dom'
import ChallengeTypesListContainer from './ChallengeTypesListContainer'

describe('Challenge Types List Wrapper', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <ChallengeTypesListContainer />,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})