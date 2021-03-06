import React from 'react'

const Modal = (props) => {
    return(
    <section className='modal-wrapper'>
        <div className='modal-content'>
            <button  onClick={()=>props.toggleModalDisplay()} className='modal-content-close-button'>
                X
            </button>
            {props.children}
        </div>
    </section>
    )
}

export default Modal