import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import CommunitiesListItem from './CommunitiesListItem'

const listItem = {
    name: 'Community 1', communities_id: 1, 
    subcommunities: [
        {name: 'subcommunity 1', subcommunities_id: 11},
        {name: 'subcommunity 2', subcommunities_id: 12},
        {name: 'subcommunity 3', subcommunities_id: 13},
        {name: 'subcommunity 4', subcommunities_id: 14},
        {name: 'subcommunity 5', subcommunities_id: 15},
        {name: 'subcommunity 6', subcommunities_id: 16}
    ]
}

describe('CommunitiesListItem', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(        
            <BrowserRouter>
                <CommunitiesListItem listItem={listItem}/>
            </BrowserRouter>, 
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})