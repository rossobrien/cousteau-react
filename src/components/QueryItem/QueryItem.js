import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'antd'
import QueryLikeButton from '../QueryLikeButton/QueryLikeButton'

export default class QueryItem extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired,
    runQuery: PropTypes.func.isRequired,
    likeQuery: PropTypes.func.isRequired
  }

  render() {
    const { query, likeQuery } = this.props

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
          <Col span={20}><Link to={"/query/"+query.id}>{query.name}</Link></Col>
        </Row>
      </div> 
    )
  }
}
