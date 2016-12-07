import React, { Component, PropTypes } from 'react'
import { Icon } from 'antd'

export default class QueryLikeButton extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired,
    likeQuery: PropTypes.func.isRequired
  }

  render() {
    const { query, likeQuery } = this.props
    const icon = query.liked ? "star" : "star-o"

    return (   
      <div className="like-button" onClick={() => likeQuery(query.id)}>
         <Icon type={icon} />
        <span>{query.likes}</span>
      </div>
    )
  }
}