import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class UserProfile extends React.Component {

  constructor(){
    super()

    this.state = {}
  }

  componentDidMount(){
    const token = Auth.getToken()
    axios.get('/api/me', {
      headers: {
        'Authorization': `Bearer ${token}` }
    })
      .then(res => this.setState({user: res.data}))
  }
  render(){
    if(!this.state.user) return null
    return(
      <section className="section">
        <h1 className="title is-2">Profile info</h1>
        <p>Username: {this.state.user.username}</p>
        <p>Email: {this.state.user.email}</p>
        <hr />
        <h2 className="title is-4">Events created by you</h2>
        <div className="columns">
          {this.state.user.events.map(event=>
            <div key={event.id} className="column is-one-quarter-desktop">
              <h1 className="title is-6">{event.name}</h1>
              <figure>
                <img src={event.image} alt={event.name} />
              </figure>
            </div>
          )}
        </div>
      </section>
    )
  }
}


export default UserProfile
