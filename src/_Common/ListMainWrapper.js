import React from 'react'
import ListMainItem from './ListMainItem'

const ListMainWrapper = (props) => {
    
    const renderList = (listData) => {
        return listData.map(listItem => {
            return (
            <ListMainItem key={listItem.id} path={listItem.path}>
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
    <>
        <main>
            <ul className={`list-main-wrapper ${props.listClassName}`}>
                {renderList(props.listData)}
            </ul>
        </main>
    </>
    )
}

export default ListMainWrapper