import React, { Component, PropTypes } from 'react'
import QueryLikeButton from '../QueryLikeButton/QueryLikeButton'
import { Col, Row } from 'antd'

export default class QueryHeader extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired,
    likeQuery: PropTypes.func.isRequired
  }

  render() {
    const { query, likeQuery } = this.props

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
          <Col span={20} offset={1}><h2>{query.name}</h2></Col>
        </Row>
      </div>
    )
  }
}