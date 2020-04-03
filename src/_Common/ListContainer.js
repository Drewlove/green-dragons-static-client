import React from 'react'
import ListItem from './ListItem'

const ListContainer = (props) => {

    const renderHeader = () => {
        return(
        <header>
            <h1>{props.header}</h1>
        </header>
        )
    }
    
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
        {props.header ? renderHeader() : null }
        <main>
            <ul className={`list-container-primary ${props.listClassName}`}>
                {renderList(props.listData)}
            </ul>
        </main>
    </>
    )
}

export default ListContainer