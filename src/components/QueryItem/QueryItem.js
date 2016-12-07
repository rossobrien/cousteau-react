import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'antd'
import QueryLikeButton from '../QueryLikeButton/QueryLikeButton'

export default class QueryItem extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired,
    runQuery: PropTypes.func.isRequired,
    likeQuery: PropTypes.func.isRequired
  }

  render() {
    const { query, likeQuery, runQuery } = this.props

    return (
      <div className="query-item">
        <Row>
          <Col span={2}> 
            <QueryLikeButton query={query} likeQuery={likeQuery} />
          </Col>
          <Col span={2}>
            <div className="run-count">
              {query.runs}
              <span>runs</span>
            </div>
          </Col>
          <Col span={20} onDoubleClick={() => runQuery(query.id)}><a>{query.name}</a></Col>
        </Row>
      </div> 
    )
  }
}
