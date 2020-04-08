import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import CommunitiesListItemSubcommunitiesListItem from './CommunitiesListItemSubcommunitiesListItem'

describe('CommunitiesListItemSubcommunitiesListItem', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <CommunitiesListItemSubcommunitiesListItem subcommunity={{name: 'test'}}/>
            </BrowserRouter>, 
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})
