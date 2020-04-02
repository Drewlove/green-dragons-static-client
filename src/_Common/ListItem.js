import React from 'react'

const ListItem = (props) => {
    return(
    <li className='common-list-item'>
        <a href={props.path}>
            {props.children}
        </a> 
    </li>
    )
}

export default ListItem