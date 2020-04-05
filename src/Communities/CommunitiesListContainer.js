import React from 'react'
import ListMainWrapper from '../_Common/ListMainWrapper'

const CommunitiesListContainer = () => {
    
    const communitiesList = [
        {name: 'Community 1', communities_id: 1}, 
        {name: 'Community 2', communities_id: 2},
        {name: 'Community 3', communities_id: 3},
        {name: 'Community 4', communities_id: 4}  
    ]
    
    return(
        <main>
            <ListMainWrapper
            rootPath='/communities'
            tableName='communities'
            listData={communitiesList}
            propertiesToDisplay={['name']} 
            listClassName='communities-list'
            />
        </main>
        )
}

export default CommunitiesListContainer
