import React from 'react'

const ListItem = (props) => {
    return(
    <li className='list-item-primary'>
        <a href={props.path}>
            {props.children}
        </a> 
    </li>
    )
}

export default ListItem