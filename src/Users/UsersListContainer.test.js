import React from 'react'
import ReactDOM from 'react-dom'
import UsersListContainer from './UsersListContainer'

describe('Users List Container', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <UsersListContainer />, 
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})