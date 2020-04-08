import React from 'react'
import {Link} from 'react-router-dom'

const CommunitiesListItemSubcommunitiesListItem = (props) => {
    return(
            <li className='communities-list-item-subcommunities-list-item'>
                <Link 
                className='communities-list-item-subcommunities-list-item-link'
                to={`/communities/subcommunities/${props.subcommunity.subcommunities_id}`}>
                    {props.subcommunity.name}
                </Link>
            </li>
    )
}

export default CommunitiesListItemSubcommunitiesListItem