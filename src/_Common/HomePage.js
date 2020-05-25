import React from 'react'

const HomePage = () => {
    return(
        <>
        <header>
            <h2 className='home-page-header'>Green Dragons Dashboard</h2>
        </header>
        <main className='home-page-main'>
            <p>This app is a prototype made for the administrative staff of <a href='https://www.greendragonsinc.com/'>Green Dragons Inc.,</a> a k-12 program that combines martial arts, urban gardening, and physical fitness.</p>
            <p>The app consolidates student information and other dynamic pieces of the Green Dragons Program.</p>
            <p>Admin can create, edit, and delete communities, subcommunities, challenges, students, and the following student information:</p>
            <ul>
                <li>Profile</li>
                <li>Communitie</li>
                <li>Transaction</li>
                <li>Challenge Entries</li>
            </ul>
        </main>
        </>
    )
}

export default HomePage