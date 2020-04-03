import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import UserNavTabs from './UserNavTabs'

describe('User Nav Tabs', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <UserNavTabs />
            </BrowserRouter>,
            div 
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})