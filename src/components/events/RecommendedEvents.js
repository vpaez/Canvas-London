import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Promise from 'bluebird'
import { Link } from 'react-router-dom'


class RecommendedEvents extends React.Component {

  constructor(){
    super()
    this.state = {}
  }

  matchedEvents(){

    const exhibitions = this.state.exhibitions
    return exhibitions.filter(exhibition => {
    //   console.log(exhibition.keywords)
      const match = exhibition.keywords.filter(keyword =>{
        if(this.state.keywords.includes(keyword.id)) return keyword
      }).length
      console.log(match)
      if(match) return exhibition
    })
  }


  componentDidMount(){
    Promise.props({
      keywords: axios.get('/api/me', { headers: {
        'Authorization': `Bearer ${Auth.getToken()}`}
      }).then(res => res.data.keywords),
      exhibitions: axios.get('/api/events').then(res => res.data)
    })
      .then(res => this.setState({keywords: res.keywords.map(keyword => keyword.id), exhibitions: res.exhibitions}))
      .catch(err => this.setState({ errors: err.response.data.errors}))
  }

  render(){
    if(!this.state.exhibitions) return null
    if(this.state.keywords.length === 0) return null
    return(
      <div className="container">
        <h1 className="title">Recommended for you</h1>
        <div className="tile is-ancestor">
          {this.matchedEvents().slice(0, 10).map(exhibition =>
            <div key={exhibition.id} className="tile is-2 baby">
              <Link to={`/events/${exhibition.id}`}>
                <figure>
                  <img src={exhibition.image}/>
                </figure>
                <h1 className="title is-4">{exhibition.name}</h1>
              </Link >
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default RecommendedEvents
