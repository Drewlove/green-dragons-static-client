import React from 'react'

const DragonBucksForm = () => {
    return(
    <main>
        <form className='dragon-bucks-form'>
            <fieldset>
                <legend>
                    <h2>Dragon Bucks</h2>
                </legend>
                <div>
                    <label>Amount</label>
                    <input type='number'/>
                </div>
                <div>
                    <label>Date</label>
                    <input type='text'/>
                </div>
                <div>
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