import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import navLogo from '../assets/Luminance_logos.png'

class Navbar extends React.Component {

  render() {

    return (
      <nav className="navbar">
        <div className="main-nav-wrap">
          <div className="nav-logo-wrap">
            <img className="nav-logo" src={navLogo} alt="nav-logo" />
          </div>
          <div className="navbar-wrap">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/Products" className="navbar-item">Products</Link>
            <Link to="/Events" className="navbar-item">Events</Link>
          </div>
        </div>
      </nav >
    )
  }
}

export default withRouter(Navbar)