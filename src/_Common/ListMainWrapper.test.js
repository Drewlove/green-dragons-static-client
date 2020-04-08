import React from 'react'
import ReactDOM from 'react-dom'
import ListMainWrapper from './ListMainWrapper'

const tableName = 'test'
const listData = [{name: 'test 1', test_id: 1}, {name: 'test 2', test_id: 2}]
const propertiesToDisplay = ['name']

describe('List Main Wrapper', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <ListMainWrapper tableName={tableName} listData={listData} propertiesToDisplay={propertiesToDisplay} />,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})