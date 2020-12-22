import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  render() {
    
    return (
      <nav className="navbar">
        <div className="navbar wrap">
        <Link to="/" className="navbar-item">Home</Link> 
        <Link to="/Products" className="navbar-item">Products</Link> 
        <Link to="/Events" className="navbar-item">Events</Link> 
        </div>
      </nav >
    )
  }
}

export default withRouter(Navbar)