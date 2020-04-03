import React from 'react'
import ReactDOM from 'react-dom'
import DragonBucksForm from './DragonBucksForm'

describe('Dragon Busk Form', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <DragonBucksForm />, 
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})
