import React from 'react'
import ReactDOM from 'react-dom'
import UserDragonBucksForm from './UserDragonBucksForm'

describe('Dragon Busk Form', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <UserDragonBucksForm />, 
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})
