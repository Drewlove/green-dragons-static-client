import React from 'react'
import {Link} from 'react-router-dom'

const ModalContentFormLinks = () => {
    return (
        <div className='modal-content-links-wrapper'>
            <Link to=''>Community</Link>
            <Link to=''>Challenge Type</Link>
            <Link to=''>User</Link>
            <Link to=''>Challenge Entry</Link>
            <Link to=''>New things</Link>
        </div>
    )
}

export default ModalContentFormLinks