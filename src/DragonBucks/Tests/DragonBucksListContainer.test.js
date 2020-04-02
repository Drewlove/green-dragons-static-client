import React from 'react'
import ReactDOM from 'react-dom'
import DragonBucksListContainer from '../DragonBucksListContainer'

describe('Dragon Bucks List Container', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <DragonBucksListContainer />,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})