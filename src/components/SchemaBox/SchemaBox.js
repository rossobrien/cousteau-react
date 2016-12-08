import React, { Component, PropTypes } from 'react'
import { Card } from 'antd'

export default class SchemaBox extends Component {
  static propTypes = {
  }

  render() {

    return (   
      <div className="schema-box">
        <Card>
          <h2>Schema</h2>
          <p>tables go here</p>
        </Card>
      </div>
    )
  }
}