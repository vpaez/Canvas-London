import React from 'react'
import axios from 'axios'


class Register extends React.Component {

  constructor(){
    super()
    this.state = {
      data: {
        keyword_ids: []
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange(e){
    const data = {...this.state.data, [e.target.name]: e.target.value}
    this.setState({ data })
  }

  handleSubmit(e){
    console.log(this.state.data)
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({errors: err.response.data.error}))
  }


  render(){
    return(
      <section className="section">
        <div className="columns">
          <div className="column is-one-third-desktop">
          </div>
          <div className="column is-one-third-desktop">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input className="input"
                    type="text"
                    placeholder="Username.."
                    name="username"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.username && <div className="help is-danger">{this.state.errors.username}</div>}
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input"
                    type="text"
                    placeholder="Email..."
                    name="email"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.email && <div className="help is-danger">{this.state.errors.email}</div>}
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className="input"
                    type="password"
                    placeholder="Password..."
                    name="password"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input className="input"
                    type="password"
                    placeholder="Re-enter your password..."
                    name="password_confirmation"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Are you a student?</label>
                <p className="is-size-7 has-text-grey">
                We asked this to show you discounted ticket prices when available. You can edit this preference later from your profile page.
                </p>
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="concession" value={'True'} onClick={this.handleChange}/>
                    Yes
                  </label>
                  <label className="radio">
                    <input type="radio" name="concession" value={'False'} onClick={this.handleChange}/>
                    No
                  </label>
                </div>
              </div>
              <button className="button is-info">Submit</button>
            </form>
          </div>
          <div className="column is-one-third-desktop">
          </div>
        </div>
      </section>
    )
  }
}

export default Register
