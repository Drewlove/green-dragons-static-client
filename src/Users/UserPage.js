import React from 'react'
import {Link} from 'react-router-dom'

const UserPage = (props) => {
    const rootPath= `/users/${props.match.params.user_id}`
    return(
        <main>
            <section className='user-nav-tabs'>
                <Link to={`${rootPath}/profile`}>Profile</Link>
                <Link to={`${rootPath}/communities`}>Communities</Link>
                <Link to={`${rootPath}/challenges`}>Challenges</Link>
                <Link to={`${rootPath}/dragon-bucks`}>Dragon Bucks</Link>
            </section>
        </main>
    )
}

export default UserPage