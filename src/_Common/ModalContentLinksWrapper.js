import React from 'react'
import {Link} from 'react-router-dom'

const ModalContentLinkswrapper = (props) => {

    const handleClick = () => {
        props.toggleModalDisplay()
    }

    return (
        <div className='modal-content-links-wrapper'>
            <Link className='modal-content-link' to='/communities/0' onClick={() => handleClick()}>Community</Link>
            <Link className='modal-content-link' to='/challenges/0' onClick={() => handleClick()}>Challenge Type</Link>
            <Link className='modal-content-link' to='/users/0/profile' onClick={() => handleClick()}>User</Link>
            <Link className='modal-content-link indent' to='/users/0/user-challenges/0' onClick={() => handleClick()}>Challenge Entry</Link>
            <Link className='modal-content-link indent' to='/users/0/user-dragon-bucks/0' onClick={() => handleClick()}>Transaction</Link>
        </div>
    )
}

export default ModalContentLinkswrapper