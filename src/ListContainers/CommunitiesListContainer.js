import React from 'react'
import ListItem from '../ReusableComponents/ListItem'

const CommunitiesListContainer = () => {
    const communitiesList = [
        {name: 'Community 1', path: '/communities/communitiy-1', id: 1}, 
        {name: 'Community 2', path: '/communities/communitiy-2', id: 2}, 
        {name: 'Community 3', path: '/communities/communitiy-3', id: 3}
    ]

    const renderList = () => {
        return communitiesList.map(listItem => {
            return (
            <ListItem key={listItem.id} path={listItem.path}>
                {listItem.name}
            </ListItem>
            )
        })
    }
    
    return(
    <>
    <h1>Communities</h1>
        {renderList()}
    </>
    )
}

export default CommunitiesListContainer