import React from 'react'
import ListItem from './ListItem'

const ListMainWrapper = (props) => {
    
    const renderList = (listData) => {
        return listData.map(listItem => {
            return (
            <ListItem key={listItem.id} path={listItem.path}>
                {displayText(listItem)}
            </ListItem>
            )
        })
    }

    const displayText = (listItem) => {
        return props.propertiesToDisplay.map(value => {
            return(
            <div key={`${listItem.id}-${value}`}>{listItem[value]}</div>
            )
        })
    }
    
    return(
        <ul className={`list-wrapper ${props.listClassName}`}>
            {renderList(props.listData)}
        </ul>
    )
}

export default ListMainWrapper