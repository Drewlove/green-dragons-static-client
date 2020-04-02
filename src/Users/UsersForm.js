import React from 'react'

const CommunitiesForm = () => {
    return(
    <form>
        <fieldset>
            <legend>
                <h2>User</h2>
            </legend>
            <div>
                <label>First Name</label>
                <input type='text'/>
            </div>
            <div>
                <label>Last Name</label>
                <input type='text'/>
            </div>
            <div>
                <label>Birthdate</label>
                <input type='text'/>
            </div>
            <section className='button-wrapper'>
                <button>Delete</button>
                <button>Save</button>
            </section>
        </fieldset>
    </form>
    )
}

export default CommunitiesForm