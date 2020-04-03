import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return(
        <nav>
            <NavLink activeClassName='active' to='/challenges'>Challenges</NavLink>
            <NavLink activeClassName='active' to='/communities'>Communities</NavLink>
            <NavLink activeClassName='active' to='/users'>Users</NavLink>
        </nav>  
    )
}

export default Nav