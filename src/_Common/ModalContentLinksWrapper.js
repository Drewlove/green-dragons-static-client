import React from 'react'
import {Link} from 'react-router-dom'

const ModalContentLinksWrapper = () => {
    return (
        <div className='modal-content-links-wrapper'>
            <Link className='modal-content-link' to=''>Community</Link>
            <Link className='modal-content-link' to=''>Challenge Type</Link>
            <Link className='modal-content-link' to=''>User</Link>
            <Link className='modal-content-link' to=''>Challenge Entry</Link>
            <Link className='modal-content-link' to=''>New things</Link>
        </div>
    )
}

export default ModalContentLinksWrapper