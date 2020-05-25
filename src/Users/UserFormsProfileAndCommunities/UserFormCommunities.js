import React from 'react'

const UserFormCommunities = () => {

    const communities = [
        { 
            name: 'Community 1', id: 1, 
            subcommunities: [
                {name: 'subcommunity 1', id: 11}, 
                {name: 'subcommunity 2', id: 12}, 
                {name: 'subcommunity 3', id: 13}
            ]
        },
        {
            name: 'Community 2', id: 2,
            subcommunities: [
                {name: 'subcommunity 1', id: 21}, 
                {name: 'subcommunity 2', id: 22}, 
                {name: 'subcommunity 3', id: 23} 
            ]
        }
    ]

    const renderCommunities = () => {
        return communities.map(community=> {
            return(
            <section className='user-form-communities-wrapper' key={community.id}>
                <h3>{community.name}</h3>
                {renderSubcommunities(community.subcommunities)}
            </section>
            )
        })
    }

    const renderSubcommunities = (subcommunities) => {
        return subcommunities.map(subcommunity => {
            return (
                <div className='user-form-communities-subcommunity-wrapper' key={subcommunity.id}>                
                    <input className='user-form-communities-subcommunity-wrapper-input' type='checkbox' name='subcommunities' id={subcommunity.name} value={subcommunity.id} />
                    <label className='user-form-communities-subcommunity-wrapper-label'>{subcommunity.name}</label>
                </div>
            )
        })
    }

    return(
        <>
            <header>
                <h2>First Name Last Name</h2>
            </header>
            <main>
                <form className='user-form-communities'>
                    <fieldset>
                    <legend>
                        <h2>Communities</h2>
                    </legend>
                    {renderCommunities()}          
                    <section className='button-wrapper'>
                        <button className='button-save'>Save</button>
                    </section>
                </fieldset>
                </form>
            </main>
        </>
    )
}

export default UserFormCommunities