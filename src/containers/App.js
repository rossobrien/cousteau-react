import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import QueryTabs from '../components/QueryTabs/QueryTabs'
import * as QueryActions from '../actions'

const App = ({queries, actions, filter}) => (
  <div>
    <Header/>
    <QueryTabs queries={queries} actions={actions} filter={filter}/>
  </div>
)

App.propTypes = {
  queries: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  filter: PropTypes.string,
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
