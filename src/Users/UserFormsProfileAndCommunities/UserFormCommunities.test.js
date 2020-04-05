import React from 'react'
import ReactDOM from 'react-dom'
import UserFormCommunities from './UserFormCommunities'

describe('User Form Communities', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <UserFormCommunities/>, 
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})