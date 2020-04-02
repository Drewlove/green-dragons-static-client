import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const UserNavTabs = (props) => {
    const rootPath= `/users/${props.match.params.user_id}`
    return(
        <section className='user-nav-tabs'>
            <Link to={`${rootPath}/profile`}>Profile</Link>
            <Link to={`${rootPath}/communities`}>Communities</Link>
            <Link to={`${rootPath}/challenges`}>Challenges</Link>
            <Link to={`${rootPath}/dragon-bucks`}>Dragon Bucks</Link>
        </section>
    )
}

export default withRouter(UserNavTabs)