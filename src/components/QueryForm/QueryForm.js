import React, { Component, PropTypes } from 'react'
import { Input } from 'antd'

export default class QueryForm extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired
  }

  render() {
    const { query } = this.props

    return (   
      <div className="query-form">
        <Input type="textarea" rows={4} value={query.query}/>
      </div>
    )
  }
}