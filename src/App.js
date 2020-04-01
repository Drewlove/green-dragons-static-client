import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import Nav from './ReusableComponents/Nav'
import ChallengesRouting from './Routing/ChallengesRouting'

// import ChallengeTypesListContainer from './ListContainers/ChallengeTypesListContainer'
// import UsersListContainer from './ListContainers/UsersListContainer'
// import CommunitiesListContainer from './ListContainers/CommunitiesListContainer'

const App = () => {
  return (
    <>
      <Nav/>
      <Route path='/challenges' component={ChallengesRouting} />
    </>
  );
}

export default App;
