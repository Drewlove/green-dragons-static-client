import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import UserDragonBucksListContainer from './UserDragonBucksListContainer'

describe('User Dragon Bucks List Container', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <UserDragonBucksListContainer />
            </BrowserRouter>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})