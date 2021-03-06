import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import QueryView from '../components/QueryView/QueryView'
import * as QueryActions from '../actions'

const QueryPage = ({queries, queryId, actions}) => (
  <div>
    <QueryView queries={queries} queryId={queryId} actions={actions} />
  </div>
)

QueryPage.propTypes = {
  queries: PropTypes.array.isRequired,
  queryId: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  queries: state.queries,
  queryId: parseInt(ownProps.params.queryId)

})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(QueryActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryPage)