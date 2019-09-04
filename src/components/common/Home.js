import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import HomeNavbar from '../common/HomeNavbar'
import { Link } from 'react-router-dom'
import ExhibitionsDisplay from '../../components/events/ExhibitionsDisplay'
import WithLoading from './Loader'
import WithRecommendedFilter from './WithRecommendedFilter'
import WithCurrentFilter from './WithCurrentFilter'
import WithNearbyFilter from './WithNearbyFilter'
import { compose } from 'recompose'

Math.radians = function(degrees) {
  return degrees * Math.PI / 180
}


const RecommendedExhibitions = compose(
  WithLoading,
  WithRecommendedFilter
)(ExhibitionsDisplay)
const CurrentExhibitions = compose(
  WithLoading,
  WithCurrentFilter
)(ExhibitionsDisplay)
const NearbyExhibitions = compose(
  WithLoading,
  WithNearbyFilter
)(ExhibitionsDisplay)

class Home extends React.Component {

  constructor(){
    super()
    this.state = {
      exhibitions: null,
      nearby: null,
      keywords: null,
      exhibitionsForYou: null,
      isLoading: false
    }
  }

  componentDidMount(){
    this.setState({ isLoading: false })
    axios.get('/api/events')
      .then(res => {
        if(Auth.getToken()) {
          axios.get('/api/me', { headers: {
            'Authorization': `Bearer ${Auth.getToken()}`}
          })
            .then(res => {
              const keywords = res.data.keywords.map(keyword => keyword.id)
              this.setState({keywords})
            })
        }
        this.setState({exhibitions: res.data})
      })
      .then(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords
          this.setState({ coordinates: {latitude, longitude} })
        })
      })
      .catch(err => this.setState({ errors: err.response.data.errors})
      )
  }

  render(){
    if(!this.state.exhibitions || !this.state.keywords) return null
    return(
      <div>
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-light is-1">
                Canvas
              </h1>
              <h2 className="subtitle has-text-light">
                Art Shows in London
              </h2>
            </div>
          </div>
        </section>
        <HomeNavbar />
        <CurrentExhibitions
          isLoading={this.state.isLoading}
          sectionTitle='Whats On'
          exhibitions = {this.state.exhibitions}
          errorMessage = {'Unfortunately, there aren\'t any exhibitions on display at the moment.'}/>
        {Auth.isAuthenticated() &&
        <RecommendedExhibitions
          isLoading={this.state.isLoading}
          sectionTitle = 'Recommended for you'
          errorMessage = {`Unfortunately, we don't have any recommendations for you at the moment, try ${<Link to={'/me'}>adding preferences</Link>}.`}
          exhibitions = {this.state.exhibitions}
          keywords = {this.state.keywords}
        />}
        <NearbyExhibitions
          isLoading={this.state.isLoading}
          exhibitions = {this.state.exhibitions}
          userLocation = {this.state.coordinates}
          sectionTitle = 'Near me'
          errorMessage = {'Unfortunately, there aren\'t any exhibitions on display near you.'}
        />
      </div>
    )
  }
}

export default Home
