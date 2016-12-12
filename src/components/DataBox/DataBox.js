import React, { Component, PropTypes } from 'react'
import { Card } from 'antd'

export default class DataBox extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
  }

  render() {
    const { query, data } = this.props

    let element
    if (data.length > 0)
    {
      element = (
        <div className="data-box">
          <hr/>
          <br/>
          <Card>
            <h2>{query.name} results</h2>
            {data.map(row =>
               <p key={row.id}>{row.name}</p>
            )}
          </Card>
        </div>
      )
    }
    else
    {
      element = (<div className="data-box"></div>)
    }

    return (   
      element
    )
  }
}