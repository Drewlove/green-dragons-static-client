import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Modal from './Modal'

class Nav extends Component{

    handleClick(){
        console.log('clicking')
    }

    render(){
        return(
            <nav>
                <NavLink activeClassName='active' to='/challenges'>Challenges</NavLink>
                <NavLink activeClassName='active' to='/communities'>Communities</NavLink>
                <NavLink activeClassName='active' to='/users'>Users</NavLink>
                <button className='new-button' onClick={()=> this.handleClick()}>New</button>
                <Modal />
            </nav>  
        )
    }
} 

export default Nav