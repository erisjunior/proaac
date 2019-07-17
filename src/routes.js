import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/signin' component={SignIn} />
      <Redirect from='*' to='/' />
    </Switch>
  </BrowserRouter>
)

export default Routes
