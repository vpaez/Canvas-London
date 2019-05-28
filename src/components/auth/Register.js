import React from 'react'


class Register extends React.Component {

  constructor(){
    super()
    this.state = {
      data: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange(e){
    const data = {...this.state.data, [e.target.name]: e.target.value}
    this.setState({data})
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(this.state)
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
                    name="passwordConfirmation"
                    onChange={this.handleChange}
                  />
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
