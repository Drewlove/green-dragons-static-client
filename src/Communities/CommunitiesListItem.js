import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import CommunitiesListItemSubcommunitiesListItem from './CommunitiesListItemSubcommunitiesListItem'

class CommunitiesListItem extends Component{
    state = {
        toggleViewSubcommunities: false
    }

    handleClick(){
        const toggleViewSubcommunities = !this.state.toggleViewSubcommunities
        this.setState({toggleViewSubcommunities})
    }

    renderSubcommunities(subcommunities){
        return subcommunities.map(subcommunity => {
            return (
                <CommunitiesListItemSubcommunitiesListItem key={subcommunity.subcommunities_id} subcommunity={subcommunity}/>
            )
        })
    }

    render(){
        return(
            <div className={`communities-list-item${this.state.toggleViewSubcommunities ? '-view-subcommunities' :''}`}>
                <li className='communities-list-item-community-wrapper'>
                    <button onClick={() => this.handleClick()} className='communities-list-item-button'>&#10148;</button>
                    <div className='communities-list-item-link-wrapper'>
                        <Link className='communities-list-item-link' to={`/communities/${this.props.listItem.communities_id}`}>{this.props.listItem.name}</Link>
                    </div>
                </li>
                <ul className='communities-list-item-subcommunities-list'>
                    <h2>Subcommunities</h2>
                    {this.renderSubcommunities(this.props.listItem.subcommunities)}
                </ul>
             </div>
        )
    }
} 

export default CommunitiesListItem