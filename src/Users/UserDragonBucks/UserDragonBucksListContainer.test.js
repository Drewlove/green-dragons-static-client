import React from 'react'
import ReactDOM from 'react-dom'
import UserDragonBucksListContainer from './UserDragonBucksListContainer'

describe('User Dragon Bucks List Container', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <UserDragonBucksListContainer />,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})