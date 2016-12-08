import React, { Component, PropTypes } from 'react'
import { Button } from 'antd'

export default class QueryRunButton extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired,
    runQuery: PropTypes.func.isRequired
  }

  render() {
    const { query, runQuery } = this.props

    return (   
      <div className="run-button">
        <Button onClick={() => runQuery(query.id)}>Run Query</Button>
      </div>
    )
  }
}