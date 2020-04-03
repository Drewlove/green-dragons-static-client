import React from 'react'
import ReactDOM from 'react-dom'
import ListMainItem from './ListMainItem'

describe('List Main Item', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <ListMainItem/>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})