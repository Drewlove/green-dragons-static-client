import React from 'react'
import ListWrapper from '../_Common/ListWrapper'

const CommunitiesListContainer = () => {
    
    const communitiesList = [
        {name: 'Community 1', path: '/communities/community-1', id: 1}, 
        {name: 'Community 2', path: '/communities/community-2', id: 2},
        {name: 'Community 3', path: '/communities/community-3', id: 3},
        {name: 'Community 4', path: '/communities/community-4', id: 4}  
    ]
    
    return(
        <main>
            <ListWrapper 
            listData={communitiesList}
            propertiesToDisplay={['name']} 
            listClassName='communities-list'
            />
        </main>
        )
}

export default CommunitiesListContainer
