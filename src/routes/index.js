import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'
import QueryPage from '../containers/QueryPage'

export default <Route path="/" component={App}>
  <Route path="/:filter"
         component={App} />
  <Route path="/query/:queryId"
         component={QueryPage} />
</Route>