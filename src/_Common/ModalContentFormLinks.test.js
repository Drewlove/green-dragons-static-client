import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import ModalContentFormLinks from './ModalContentFormLinks'

describe('Modal Content Form Links', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <ModalContentFormLinks/>
            </BrowserRouter>, 
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})