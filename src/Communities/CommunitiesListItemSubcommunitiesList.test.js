import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import CommunitiesListItemSubcommunitiesList from './CommunitiesListItemSubcommunitiesList'

const subcommunities = [
    {name: 'subcommunity 1', subcommunities_id: 11},
    {name: 'subcommunity 2', subcommunities_id: 12},
    {name: 'subcommunity 3', subcommunities_id: 13},
]

describe('CommunitiesListItemSubcommunitiesListItem', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <CommunitiesListItemSubcommunitiesList subcommunities={subcommunities}/> 
            </BrowserRouter>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})
