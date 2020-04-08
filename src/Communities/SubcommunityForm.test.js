import React from 'react'
import ReactDOM from 'react-dom'
import SubcommunityForm from './SubcommunityForm'

describe('SubcommunityForm', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <SubcommunityForm />,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})

