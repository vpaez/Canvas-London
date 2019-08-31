import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'


class HomeNavbar extends React.Component {
  constructor(){
    super()
    this.state = {}
    this.logout = this.logout.bind(this)
  }

  logout(){
    Auth.removeToken()
    this.props.history.push('/')
  }

  render(){

    return(
      <section className="section navbar-section">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/events" className="navbar-item">
              Browse exhibitions
              </Link>
              {Auth.isAuthenticated() && <Link to="/events/new" className="navbar-item">Add new event</Link>}
            </div>


            <div className="navbar-end">
              {Auth.isAuthenticated() && <Link to="/me" className="navbar-item">Your profile</Link>}
              {!Auth.isAuthenticated() && <div className="navbar-item">
                <Link to="/register" className="navbar-item">
                  <strong>Register</strong>
                </Link>
              </div>}
              {!Auth.isAuthenticated() && <div className="navbar-item">
                <Link to="/login" className="navbar-item">
                  <strong>Login</strong>
                </Link>
              </div>}
              {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.logout}>Logout</a>}
            </div>
          </div>
        </nav>
      </section>
    )
  }
}

export default withRouter(HomeNavbar)
