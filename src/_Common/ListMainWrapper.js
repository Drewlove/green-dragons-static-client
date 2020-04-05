import React from 'react'
import ListMainItem from './ListMainItem'

const ListMainWrapper = (props) => {
    
    const renderList = (listData) => {
        return listData.map(listItem => {
            const tableRowId = listItem[`${props.tableName}_id`]
            return (
            <ListMainItem key={tableRowId} path={`${props.rootPath}/${tableRowId}`}>
                {displayText(listItem)}
            </ListMainItem>
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
        <ul className={`list-main-wrapper ${props.listClassName}`}>
            {renderList(props.listData)}
        </ul>
    )
}

export default ListMainWrapper