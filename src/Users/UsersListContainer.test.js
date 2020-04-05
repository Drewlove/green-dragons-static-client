import React from 'react'
import ReactDOM from 'react-dom'
import UsersListwrapper from './UsersListwrapper'

describe('Users List wrapper', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <UsersListwrapper />, 
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})