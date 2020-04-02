import React from 'react'

const CommunityForm = () => {
    return(
    <form>
        <fieldset>
            <legend>
                <h2>Community</h2>
            </legend>
            <label>Name</label>
            <input type='text'/>
            <section className='button-wrapper'>
                <button>Delete</button>
                <button>Save</button>
            </section>
        </fieldset>
    </form>
    )
}

export default CommunityForm