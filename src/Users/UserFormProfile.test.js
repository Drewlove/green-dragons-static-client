import React from 'react'
import ReactDOM from 'react-dom'
import UserFormProfile from './UserFormProfile'

describe('User Form Profile', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <UserFormProfile/>,
            div 
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})