import React from 'react'
import {Link} from 'react-router-dom'

const ModalContentLinkswrapper = (props) => {

    const handleClick = () => {
        props.toggleModalDisplay()
    }

    return (
        <div className='new-button-modal-content-wrapper'>
            <Link className='new-button-modal-content-link' to='/communities/0' onClick={() => handleClick()}>Community</Link>
            <Link className='new-button-modal-content-link indent' to='/communities/subcommunities/0' onClick={() => handleClick()}>Subcommunity</Link>
            <Link className='new-button-modal-content-link' to='/challenges/0' onClick={() => handleClick()}>Challenge Type</Link>            
            <Link className='new-button-modal-content-link' to='/users/0/profile' onClick={() => handleClick()}>User</Link>
            <Link className='new-button-modal-content-link indent' to='/users/0/user-challenges/0' onClick={() => handleClick()}>Challenge Entry</Link>
            <Link className='new-button-modal-content-link indent' to='/users/0/user-dragon-bucks/0' onClick={() => handleClick()}>Transaction</Link>
        </div>
    )
}

export default ModalContentLinkswrapper