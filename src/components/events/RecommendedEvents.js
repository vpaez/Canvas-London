import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Promise from 'bluebird'
import { Link } from 'react-router-dom'
import ExhibitionsDisplay from './ExhibitionsDisplay'


class RecommendedEvents extends React.Component {

  constructor(){
    super()
    this.state = {}
  }

  matchedEvents(){

    const exhibitions = this.state.exhibitions
    return exhibitions.filter(exhibition => {
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
    const exhibitions = this.matchedEvents().slice(0, 10)
    return(
      <ExhibitionsDisplay
        sectionTitle = 'Recommended for you'
        errorMessage = {`Unfortunately, we don't have any recommendations for you at the moment, try ${<Link to={'/me'}>adding preferences</Link>}.`}
        exhibitions = {exhibitions}
      />
    )
  }
}

export default RecommendedEvents
