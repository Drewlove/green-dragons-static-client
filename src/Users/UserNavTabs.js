import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'

const UserNavTabs = (props) => {
    const rootPath= `/users/${props.match.params.user_id}`

        return(
            <section className='user-nav-tabs'>
                <NavLink activeClassName='active' to={`${rootPath}/profile`}>Profile</NavLink>
                <NavLink activeClassName='active' to={`${rootPath}/communities`}>Communities</NavLink>
                <NavLink activeClassName='active' to={`${rootPath}/challenges`}>Challenges</NavLink>
                <NavLink activeClassName='active' to={`${rootPath}/dragon-bucks`}>Dragon Bucks</NavLink>
            </section>
        )
}

export default withRouter(UserNavTabs)