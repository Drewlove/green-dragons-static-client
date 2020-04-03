import React from 'react'
import ReactDOM from 'react-dom'
import ListMainWrapper from './ListMainWrapper'

describe('List Main Wrapper', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        const list = [{name: 'test 1', id: 1}, {name: 'test 2', id: 2}]
        const propertiesToDisplay = ['name']
        ReactDOM.render(
            <ListMainWrapper listData={list} propertiesToDisplay={propertiesToDisplay} />,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})