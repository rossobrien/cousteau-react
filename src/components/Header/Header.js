import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {

  render() {
    return (
      <div>
        <header className="header">
          <Link to="/">
            <h1>Cousteau</h1>
            <h2>data explorer</h2>
          </Link>
        </header>
      </div>
    )
  }
}
