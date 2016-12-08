import React, { Component, PropTypes } from 'react'
import { Card } from 'antd'

export default class DataBox extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired
  }

  render() {
    const { query } = this.props

    return (   
      <div className="data-box">
        <hr/>
        <br/>
        <Card>
          <h2>{query.name} results</h2>
          <p>Data goes here</p>
        </Card>
      </div>
    )
  }
}