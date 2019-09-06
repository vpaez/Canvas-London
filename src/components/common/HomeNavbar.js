import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'


class HomeNavbar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeBurger: false
    }
    this.logout = this.logout.bind(this)
    this.handleBurgerMenu = this.handleBurgerMenu.bind(this)
  }

  logout(){
    Auth.removeToken()
    this.props.removeUserPreferences()
  }
  handleBurgerMenu() {
    this.setState({ activeBurger: !this.state.activeBurger})
  }
  render(){

    return(
      <section className="navbar-section">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a role="button" className={`navbar-burger ${this.state.activeBurger? 'is-active':''}`} aria-label="menu" aria-expanded={this.state.activeBurger} onClick={this.handleBurgerMenu} data-target="navbarBasicExample">
              <span aria-hidden='false'></span>
              <span aria-hidden='false'></span>
              <span aria-hidden='false'></span>
            </a>
          </div>

          <div className={`navbar-menu ${this.state.activeBurger? 'is-active': ''}`}>
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
