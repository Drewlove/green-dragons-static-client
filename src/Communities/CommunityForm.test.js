import React from 'react'
import ReactDOM from 'react-dom'
import CommunityForm from './CommunityForm'

describe('Community Form', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <CommunityForm />, 
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})
