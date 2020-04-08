import React from 'react'
import {withRouter} from 'react-router-dom'
import ListMainWrapper from '../../_Common/ListMainWrapper'

const UserDragonBucksListContainer = (props) => {

    const {users_id} = props.match.params
    
    const userDragonBucksList = [
        {amount: '$25.00', date: '03/01/2020', user_dragon_bucks_id: 1}, 
        {amount: '$25.00', date: '03/11/2020', user_dragon_bucks_id: 2},
        {amount: '$25.00', date: '03/21/2020', user_dragon_bucks_id: 3},
        {amount: '$-10.00', date: '03/27/2020', user_dragon_bucks_id: 4}  
    ]
    
    return(
        <main>
            <ListMainWrapper
            rootPath={`/users/${users_id}/user-dragon-bucks`}
            tableName='user_dragon_bucks'
            listData={userDragonBucksList}
            propertiesToDisplay={['amount', 'date']} 
            listClassName='user-dragon-bucks-list'
            />
        </main>
        )
}

export default withRouter(UserDragonBucksListContainer)
