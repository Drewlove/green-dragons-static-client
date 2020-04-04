import React from 'react'
import {Link} from 'react-router-dom'

const ModalContentLinksWrapper = (props) => {

    const handleClick = () => {
        props.toggleModalDisplay()
    }

    return (
        <div className='modal-content-links-wrapper'>
            <Link className='modal-content-link' to='/communities/community-0' onClick={() => handleClick()}>Community</Link>
            <Link className='modal-content-link' to='/challenges/challenge-0' onClick={() => handleClick()}>Challenge Type</Link>
            <Link className='modal-content-link' to='/users/user-0/profile' onClick={() => handleClick()}>User</Link>
            <Link className='modal-content-link indent' to='/users/user-0/challenge-entry/challenge-entry-0' onClick={() => handleClick()}>Challenge Entry</Link>
            <Link className='modal-content-link indent' to='/users/user-0/dragon-bucks/dragon-bucks-0' onClick={() => handleClick()}>Transaction</Link>
        </div>
    )
}

export default ModalContentLinksWrapper