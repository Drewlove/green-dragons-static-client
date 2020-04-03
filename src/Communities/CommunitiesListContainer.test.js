import React from 'react'
import ReactDOM from 'react-dom'
import CommunitiesListContainer from './CommunitiesListContainer'

describe('Communities List Container', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <CommunitiesListContainer />,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})