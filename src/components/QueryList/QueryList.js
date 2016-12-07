import React, { Component, PropTypes } from 'react'
import QueryItem from '../QueryItem/QueryItem'

export default class QueryList extends Component { 

  render() {
    const { queries, actions } = this.props
    
    return (
      <div className="query-list">
        {queries.map(query =>
          <QueryItem key={query.id} query={query} {...actions}/>
        )}
      </div>
    )
  }
}