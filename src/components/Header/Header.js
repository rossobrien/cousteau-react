import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import logo from '../../styles/logo.png'

export default class Header extends Component {

  render() {
    return (
      <div>
        <header className="header">
          <Link to="/">
            <img alt="logo" src={logo} />
          </Link>
        </header>
      </div>
    )
  }
}
