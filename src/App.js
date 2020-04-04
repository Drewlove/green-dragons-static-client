import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import Nav from './_Common/Nav'
import ChallengesRouting from './ChallengeTypes/ChallengeTypesRouting'
import CommunitiesRouting from './Communities/CommunitiesRouting'
import UsersRouting from './Users/UsersRouting'

class App extends Component{


  render(){
    return (
      <>
        <Nav />
        <Route path='/challenges' component={ChallengesRouting} />
        <Route path='/communities' component={CommunitiesRouting} />
        <Route path='/users' component={UsersRouting} />
      </>
      )
    }
  }


export default App
