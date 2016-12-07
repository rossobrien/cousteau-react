import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'antd'

export default class QueryView extends Component { 
  render() {
    const { queries, queryId, actions } = this.props

  const query = queries.filter(query => {
    if(query.id == queryId) {
        return query;
    }
  })[0];//Use 0 key to flatten array wrapped object


    return (
      <div className="main-wrapper"> 
        <Row>
          <Col span={24}>
            <a onDoubleClick={() => actions.runQuery(query.id)}>{query.name}</a>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
          </Col>
          <Col span={8}>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
          </Col>
        </Row>
      </div>
    )
  }
}