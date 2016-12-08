import React, { Component, PropTypes } from 'react'
import QueryLikeButton from '../QueryLikeButton/QueryLikeButton'
import { Col, Row, Input } from 'antd'

export default class QueryHeader extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired,
    likeQuery: PropTypes.func.isRequired,
    editQuery: PropTypes.func.isRequired
  }

  state = {
    editing: false,
    name: this.props.query.name || ''
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleChange = e => {
    this.setState({ name: e.target.value })
  }

  handleSave = e => {
    this.props.query.name = e.target.value.trim()
    this.props.editQuery(this.props.query.id, this.props.query)
    this.setState({ editing: false })
  }

  render() {
    const { query, likeQuery } = this.props

    let element
    if (this.state.editing)
    {
      element = (
        <Input 
          id={query.id} 
          size="large" 
          defaultValue={query.name} 
          onChange={this.handleChange} 
          onBlur={this.handleSave}
          onPressEnter={this.handleSave} />
      )
    }
    else
    {
      element = (
        <h2 onDoubleClick={this.handleDoubleClick}>{query.name}</h2>
      )
    }

    return (   
      <div className="query-header">
         <Row>
          <Col span={1}> 
            <QueryLikeButton query={query} likeQuery={likeQuery} />
          </Col>
          <Col span={1} offset={1}>
            <div className="run-count">
              {query.runs}
              <span>runs</span>
            </div>
          </Col>
          <Col span={20} offset={1}>{element}</Col>
        </Row>
      </div>
    )
  }
}