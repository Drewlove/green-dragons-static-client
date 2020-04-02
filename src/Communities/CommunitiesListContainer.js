import React from 'react'
import ListItem from '../_Common/ListItem'

const CommunitiesListContainer = () => {
    
    const challengesList = [
        {name: 'Community 1', path: '/communities/community-1', id: 1}, 
        {name: 'Community 2', path: '/communities/community-2', id: 2},
        {name: 'Community 3', path: '/communities/community-3', id: 3},
        {name: 'Community 4', path: '/communities/community-4', id: 4}  
    ]

    const renderList = () => {
        return challengesList.map(listItem => {
            return (
            <ListItem key={listItem.id} path={listItem.path}>
                {listItem.name}
            </ListItem>
            )
        })
    }
    
    return(
    <>
    {console.log('communities')}
    <header>
        <h1>Communities</h1>
    </header>
    <main className='communities-main'>
        <ul className='list'>
        {renderList()}
        </ul>
    </main>
    </>
    )
}

export default CommunitiesListContainer
