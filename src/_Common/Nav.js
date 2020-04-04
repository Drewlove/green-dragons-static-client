import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Modal from './Modal'
import ModalContentLinksWrapper from './ModalContentLinksWrapper'

class Nav extends Component{
    state = {
        displayModal: false, 
    }

    toggleModalDisplay(){
        const displayModal = !this.state.displayModal
        this.setState({displayModal})
    }

    render(){
        return(
            <nav>
                <NavLink activeClassName='active' to='/challenges'>Challenges</NavLink>
                <NavLink activeClassName='active' to='/communities'>Communities</NavLink>
                <NavLink activeClassName='active' to='/users'>Users</NavLink>
                {this.props.children}
                <button className='new-button' onClick={() => this.toggleModalDisplay()}>New</button>
                {this.state.displayModal ? 
                <Modal toggleModalDisplay={() => this.toggleModalDisplay()}>
                    <ModalContentLinksWrapper  toggleModalDisplay={() => this.toggleModalDisplay()}/>
                </Modal> 
                : null}
            </nav>  
        )
    }
} 

export default Nav