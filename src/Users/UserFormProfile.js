import React from 'react'

const UserForm = () => {
    return(
    <main>
        <form className='user-form-profile'>
            <fieldset>
                <legend>
                    <h2>User</h2>
                </legend>
                <div className='input-wrapper'>
                    <label>First Name</label>
                    <input type='text'/>
                </div>
                <div className='input-wrapper'>
                    <label>Last Name</label>
                    <input type='text'/>
                </div>
                <div className='input-wrapper'>
                    <label>Birthdate</label>
                    <input type='text'/>
                </div>
                <section className='button-wrapper'>
                    <button>Delete</button>
                    <button>Save</button>
                </section>
            </fieldset>
        </form>
    </main>
    )
}

export default UserForm