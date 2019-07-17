import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'

import Home from './pages/Home'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Redirect from='*' to='/' />
    </Switch>
  </BrowserRouter>
)

export default Routes
