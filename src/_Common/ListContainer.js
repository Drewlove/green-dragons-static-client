import React from 'react'
import ListItem from './ListItem'

const ListContainer = (props) => {
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
    <>
    <header>
        <h1>{props.title}</h1>
    </header>
    <main>
        <ul className={`list-container-primary ${props.listClassName}`}>
            {renderList(props.listData)}
        </ul>
    </main>
    </>
    )
}

export default ListContainer