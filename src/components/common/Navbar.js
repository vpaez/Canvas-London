import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'


class Navbar extends React.Component {
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
    this.props.history.push('/')
  }
  handleBurgerMenu() {
    this.setState({ activeBurger: !this.state.activeBurger})
  }
  render(){
    const textColor = this.props.location.pathname === '/'? 'has-text-light': ''
    return(
      <section className='navbar-section'>
        <nav className='navbar is-fixed-top' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            {this.props.location.pathname !== '/' && <Link to='/'>
              <figure className='image is-32x32 logo'>
                <img src='assets/loader.png' alt='canvas'/>
              </figure>
            </Link>}
            <a role='button' className={`navbar-burger ${this.state.activeBurger? 'is-active':''}`} aria-label='menu' aria-expanded={this.state.activeBurger} onClick={this.handleBurgerMenu} data-target='navbarBasicExample'>
              <span aria-hidden='false'></span>
              <span aria-hidden='false'></span>
              <span aria-hidden='false'></span>
            </a>
          </div>

          <div className={`navbar-menu has-text-light ${this.state.activeBurger? 'is-active': ''}`}>
            <div className='navbar-start'>
              <Link to='/events' className={`navbar-item ${textColor}`}>
              Browse exhibitions
              </Link>
              {Auth.isAuthenticated() && <Link to='/events/new' className={`navbar-item ${textColor}`}>Add new event</Link>}
            </div>


            <div className='navbar-end'>
              {Auth.isAuthenticated() && <Link to='/me' className={`navbar-item ${textColor}`}>Your profile</Link>}
              {!Auth.isAuthenticated() && <div className={`navbar-item ${textColor}`}>
                <Link to='/register' className={`navbar-item ${textColor}`}>
                  <strong>Register</strong>
                </Link>
              </div>}
              {!Auth.isAuthenticated() && <div className={`navbar-item ${textColor}`}>
                <Link to='/login' className={`navbar-item ${textColor}`}>
                  <strong>Login</strong>
                </Link>
              </div>}
              {Auth.isAuthenticated() && <a className={`navbar-item ${textColor}`} onClick={this.logout}>Logout</a>}
            </div>
          </div>
        </nav>
      </section>
    )
  }
}

export default withRouter(Navbar)
