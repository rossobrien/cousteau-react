import React, { Component, PropTypes } from 'react'
import { Input } from 'antd'

export default class QueryForm extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired
  }

  render() {
    const { query } = this.props

    return (   
      <Row>
        <Col span={18}>
          <Input 
            id={query.id} 
            size="large"
            type="textarea"
            rows={5}
            defaultValue={query.query} 
           /* onChange={this.handleChange} 
            onBlur={this.handleSave}
            onPressEnter={this.handleSave}*/ />
        </Col>
        <Col span={5} offset={1}>
          <SchemaBox />
        </Col>
      </Row>
    )
  }
}