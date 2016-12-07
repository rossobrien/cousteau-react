import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import QueryTabs from '../components/QueryTabs/QueryTabs'
import * as QueryActions from '../actions'

const App = ({ children }) => (
  <div>
    <Header/>
    {children}
  </div>
  /*<QueryTabs queries={queries} actions={actions} filter={filter}/>*/
)

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
}

const mapStateToProps = (state, ownProps) => ({
  queries: state.queries,
  filter: ownProps.params.filter
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(QueryActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
