import React from 'react'

const ChallengesForm = () => {
    return(
    <form>
        <fieldset>
        <legend>
            <h2>Challenge Type</h2>
        </legend>
        <div>
            <label>Name</label>
            <input type='text'/>
        </div>
        <div>
            <label>Description</label>
            <textarea rows='5'></textarea>
        </div>
        <div>
            <label>Units</label>
            <div className='radio-wrapper'>
                <input className='radio' type='radio' name='units' value='time'/>Time
                <input className='radio' type='radio' name='units' value='other'/>Other
            </div>
        </div>
        <div>
            <label>Unit Name</label>
            <input type='text'/>
        </div>
            <div>
            <label>Best Record</label>
            <select>
            <option value='highest'>Highest</option>  
            <option value='lowest'>Lowest</option>  
            </select>
        </div>
        <section className='button-wrapper'>
            <button>Delete</button>
            <button>Save</button>
        </section>
        </fieldset>
    </form>
    )
}

export default ChallengesForm