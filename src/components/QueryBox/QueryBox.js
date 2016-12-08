import React, { Component, PropTypes } from 'react'
import { Input } from 'antd'

export default class QueryBox extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired
  }

  render() {
    const { query } = this.props

    return (   
      <div className="query-box">
        <pre>{query.query}</pre>
      </div>
    )
  }
}