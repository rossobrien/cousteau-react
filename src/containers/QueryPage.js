import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import * as QueryActions from '../actions'

const QueryPage = ({query, actions}) => (
  <div>
    <Header/>
  </div>
)

QueryPage.propTypes = {
  query: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  query: state.queries
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(QueryActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryPage)