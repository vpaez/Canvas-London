import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import ExhibitionsDisplay from '../../components/events/ExhibitionsDisplay'
import WithRecommendedFilter from './WithRecommendedFilter'
import WithCurrentFilter from './WithCurrentFilter'
import WithNearbyFilter from './WithNearbyFilter'

Math.radians = function(degrees) {
  return degrees * Math.PI / 180
}



class Home extends React.Component {

  constructor(){
    super()
    this.state = {
      exhibitions: null,
      nearby: null,
      keywords: null,
      isLoading: true,
      coordinates: null
    }
    this.removeUserPreferences = this.removeUserPreferences.bind(this)
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      this.setState({ coordinates: {latitude, longitude} })
    })
    axios.get('/api/events')
      .then(res => this.setState({exhibitions: res.data}))
      .then(() => {
        if(Auth.getToken()) {
          console.log('yes')
          axios.get('/api/me', { headers: {
            'Authorization': `Bearer ${Auth.getToken()}`}
          })
            .then(res => {
              const keywords = res.data.keywords.map(keyword => keyword.id)
              this.setState({keywords})
            })
        }
      })
      .then(()=> this.setState({ isLoading: false }))
      .catch(err => this.setState({ errors: err.response.data.errors})
      )
  }
  removeUserPreferences(){
    this.setState({keywords: null})
  }
  render(){
    return(
      <div>
        <section className='hero is-medium has-navbar-fixed-top'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title has-text-light is-1'>
                Canvas
              </h1>
              <h2 className='subtitle has-text-light'>
                Art Shows in London
              </h2>
            </div>
          </div>
        </section>
        <ExhibitionsDisplay
          sectionTitle='Whats On'
          isLoading={this.state.isLoading}
          exhibitions = {this.state.exhibitions}
          filterFunction = {WithCurrentFilter}
          errorMessage = {'Unfortunately, there aren\'t any exhibitions on display at the moment.'}
        />
        <ExhibitionsDisplay
          isLoading={this.state.isLoading}
          sectionTitle = 'Recommended for you'
          errorMessage = {`Unfortunately, we don't have any recommendations for you at the moment, try logging in.`}
          exhibitions = {this.state.exhibitions}
          keywords = {this.state.keywords}
          filterFunction = {WithRecommendedFilter}
        />
        <ExhibitionsDisplay
          sectionTitle = 'Near me'
          isLoading={this.state.isLoading}
          exhibitions = {this.state.exhibitions}
          userLocation = {this.state.coordinates}
          filterFunction = {WithNearbyFilter}
          errorMessage = {'Unfortunately, there aren\'t any exhibitions on display near you.'}
        />
      </div>
    )
  }
}

export default Home
