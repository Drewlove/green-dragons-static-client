import React from 'react'
import CommunitiesListItem from './CommunitiesListItem'

const CommunitiesListContainer = () => {
    
    const communitiesList = [
        {
            name: 'Community 1', communities_id: 1, 
            subcommunities: [
                {name: 'subcommunity 1', subcommunities_id: 11},
                {name: 'subcommunity 2', subcommunities_id: 12},
                {name: 'subcommunity 3', subcommunities_id: 13}
            ]
        }, 
        {
            name: 'Community 2', communities_id: 2, 
            subcommunities: [
                {name: 'subcommunity 1', subcommunities_id: 21},
                {name: 'subcommunity 2', subcommunities_id: 22},
                {name: 'subcommunity 3', subcommunities_id: 23}
            ]
        },
        {
            name: 'Community 3', communities_id: 3, 
            subcommunities: [
                {name: 'subcommunity 1', subcommunities_id: 31},
                {name: 'subcommunity 2', subcommunities_id: 32},
                {name: 'subcommunity 3', subcommunities_id: 33}
            ]
        },
    ]

    const renderList = () => {
        return communitiesList.map(listItem => {
            return(
                <CommunitiesListItem key={listItem.communities_id} listItem={listItem} />
            )
        })
    }
    
    return(
        <main>
            <ul className='communities-list-container list-main-wrapper'>
                {renderList()}
            </ul>
        </main>
        )
}

export default CommunitiesListContainer
