import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'antd'
import QueryHeader from '../QueryHeader/QueryHeader'
import QueryBox from '../QueryBox/QueryBox'
import SchemaBox from '../SchemaBox/SchemaBox'
import QueryRunButton from '../QueryRunButton/QueryRunButton'
import DataBox from '../DataBox/DataBox'

export default class QueryView extends Component { 
  state = {
    data: []
  }

  runQuery(id) {
    this.props.actions.runQuery(id)
    this.state.data = [{id: 1, name: 'test'}, {id: 2, name: 'testing'}]
  }

  render() {
    const { queries, queryId, actions } = this.props

  const query = queries.filter(query => {
    if(query.id == queryId) {
        return query;
    }
  })[0];//Use 0 key to flatten array wrapped object


    return (
      <div className="main-wrapper"> 
       
        <QueryHeader query={query} likeQuery={actions.likeQuery} editQuery={actions.editQuery}/>
       
        <QueryBox query={query} editQuery={actions.editQuery}/>
        
        <Row>
          <Col span={8}>
            <QueryRunButton query={query} runQuery={() => this.runQuery(query.id)} />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <DataBox query={query} data={this.state.data}/>
          </Col>
        </Row>
      </div>
    )
  }
}