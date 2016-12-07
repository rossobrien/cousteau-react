import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import ListPage from '../containers/ListPage'
import QueryPage from '../containers/QueryPage'

export default <Route path="/" component={App}>
  <IndexRoute component={ListPage} />
  <Route path="/query/:queryId" component={QueryPage} />
  <Route path="/:filter" component={ListPage} />
</Route>