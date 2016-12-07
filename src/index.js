import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import DevTools from './containers/DevTools'
import Root from './containers/Root'
import reducer from './reducers'
import 'antd/dist/antd.css'
import './styles/index.css'

const store = createStore(reducer, DevTools.instrument())
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)