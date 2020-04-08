import React from 'react'
import CommunitiesListItemSubcommunitiesListItem from './CommunitiesListItemSubcommunitiesListItem'

const CommunitiesListItemSubcommunitiesList = (props) => {

    const renderSubcommunities = (subcommunities) => {
        return subcommunities.map(subcommunity => {
            return (
                <CommunitiesListItemSubcommunitiesListItem key={subcommunity.subcommunities_id} subcommunity={subcommunity}/>
            )
        })
    }

    return(
        <ul className='communities-list-item-subcommunities-list'>
            <h2>Subcommunities</h2>
            {renderSubcommunities(props.subcommunities)}
    </ul>
    )
}

export default CommunitiesListItemSubcommunitiesList