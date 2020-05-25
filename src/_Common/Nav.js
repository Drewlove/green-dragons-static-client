import React, {Component} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import Modal from './Modal'
import NewButtonModalContent from './NewButtonModalContent'

class Nav extends Component{
    state = {
        displayModal: false, 
        focusedLink: ''
    }

    toggleModalDisplay(){
        const displayModal = !this.state.displayModal
        this.setState({displayModal})
    }

    render(){
        return(
            <nav>
                <div className='nav-wrapper'>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/challenges'>Challenges</NavLink>
                <NavLink to='/communities'>Communities</NavLink>
                <NavLink to='/users'>Users</NavLink>
                {this.props.children}
                <button className='new-button' onClick={() => this.toggleModalDisplay()}>New</button>
                {this.state.displayModal ? 
                <Modal toggleModalDisplay={() => this.toggleModalDisplay()}>
                    <NewButtonModalContent  toggleModalDisplay={() => this.toggleModalDisplay()}/>
                </Modal> 
                : null}
                </div>
            </nav>  
        )
    }
} 

export default withRouter(Nav)