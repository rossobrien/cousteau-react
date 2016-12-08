import React, { Component, PropTypes } from 'react'
import { Row, Col, Input } from 'antd'
import SchemaBox from '../SchemaBox/SchemaBox'

export default class QueryBox extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired,
    editQuery: PropTypes.func.isRequired
  }

  state = {
    editing: false,
    query: this.props.query.query || ''
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleChange = e => {
    this.setState({ query: e.target.value })
  }

  handleSave = e => {
    this.props.query.query = e.target.value.trim()
    this.props.editQuery(this.props.query.id, this.props.query)
    this.setState({ editing: false })
  }

  render() {
    const { query } = this.props

    let element
    if (this.state.editing)
    {
      element = (
        <Row>
          <Col span={16}>
            <Input 
              id={query.id} 
              size="large"
              type="textarea"
              rows={4}
              defaultValue={query.query} 
              onChange={this.handleChange} 
              onBlur={this.handleSave}
              onPressEnter={this.handleSave} />
            </Col>
            <Col span={6} offset={2}>
              <SchemaBox />
            </Col>
          </Row>
      )
    }
    else
    {
      element = (
        <Row>
          <Col span={24}>
            <pre onDoubleClick={this.handleDoubleClick}>{query.query}</pre>
          </Col>
        </Row>
      )
    }

    return (   
      <div className="query-box">
        {element}
      </div>
    )
  }
}