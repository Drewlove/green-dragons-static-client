import React from 'react'

const DragonBucksForm = () => {
    return(
    <main>
        <form className='dragon-bucks-form'>
            <fieldset>
                <legend>
                    <h2>Dragon Bucks</h2>
                </legend>
                <div className='input-wrapper'>
                    <label>User</label>
                    <select>
                        <option value='user-1'>User 1</option>  
                        <option value='user-2'>User 2</option>  
                        <option value='user-3'>User 3</option>  
                    </select>
                </div>
                <div className='input-wrapper'>
                    <label>Amount</label>
                    <input type='number'/>
                </div>
                <div className='input-wrapper'>
                    <label>Date</label>
                    <input type='text'/>
                </div>
                <div className='input-wrapper'>
                    <label>Notes</label>
                    <textarea />
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

export default DragonBucksForm