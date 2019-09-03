import React from 'react'
import axios from 'axios'
import Promise from 'bluebird'
import Auth from '../../lib/Auth'
import HomeNavbar from '../common/HomeNavbar'
import { Link } from 'react-router-dom'
import ExhibitionsDisplay from '../../components/events/ExhibitionsDisplay'


function whatsOn(arr) {
  return arr.filter(exhib => {

    const startSplitDate = exhib.start_date.split('/')
    const startMonth = startSplitDate[1] - 1
    const startDate = new Date(startSplitDate[2], startMonth, startSplitDate[0])

    const endSplitDate = exhib.end_date.split('/')
    const endMonth = endSplitDate[1] - 1
    const endDate = new Date(endSplitDate[2], endMonth, endSplitDate[0])

    const startParsed = Date.parse(startDate)
    const endParsed = Date.parse(endDate)
    const currentParsed = Date.parse(new Date())

    if (currentParsed > startParsed && currentParsed < endParsed ){
      return exhib
    }
  })
}

function orderByDate(arr) {
  return arr.slice().sort(function (a, b) {

    const aSplitDate = a.start_date.split('/')
    const aMonth = aSplitDate[1] - 1
    const aDate = new Date(aSplitDate[2], aMonth, aSplitDate[0])

    const bSplitDate = b.start_date.split('/')
    const bMonth = bSplitDate[1] - 1
    const bDate = new Date(bSplitDate[2], bMonth, bSplitDate[0])

    const parsedaDate = Date.parse(aDate)
    const parsedbDate = Date.parse(bDate)

    return parsedbDate - parsedaDate
  })
}

Math.radians = function(degrees) {
  return degrees * Math.PI / 180
}


function calculateDistance(lat,lon,userLat,userLon){

  var distance = ( 6371 * Math.acos( Math.cos( Math.radians(lat) ) * Math.cos( Math.radians( userLat ) )
                    * Math.cos( Math.radians( userLon) - Math.radians(lon) ) + Math.sin( Math.radians(lat) ) * Math.sin(Math.radians(userLat)) ) )*1000
  console.log(distance+'  meter')
  console.log(distance)
  return distance
}


class Home extends React.Component {

  constructor(){
    super()
    this.state = {
      exhibitions: null,
      nearby: null,
      keywords: null,
      exhibitionsForYou: null
    }
  }

  componentDidMount(){
    Promise.props({
      keywords: axios.get('/api/me', { headers: {
        'Authorization': `Bearer ${Auth.getToken()}`}
      }).then(res => res.data.keywords),
      exhibitions: axios.get('/api/events').then(res => res.data)
    })
      .then(res => {
        const keywords = res.keywords.map(keyword => keyword.id)
        const exhibitions = res.exhibitions
        const exhibitionsForYou = this.matchedEvents(res.exhibitions, keywords).slice(0, 10)

        this.setState({keywords, exhibitions, exhibitionsForYou})
      })
      .then(() => {
        console.log(this.state.exhibitions, 'EXH')
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords
          const nearby = this.state.exhibitions.filter(exhibition =>{
            return (calculateDistance(longitude, latitude, exhibition.lng, exhibition.lat, 3 ) < 2000)
          })

          this.setState({ nearby })
        })
      })
      .catch(err => this.setState({ errors: err.response.data.errors}))
  }

  matchedEvents(exhibitions, keywords){
    return exhibitions.filter(exhibition => {
      const match = exhibition.keywords.filter(keyword =>{
        if(keywords.includes(keyword.id)) return keyword
      }).length
      if(match) return exhibition
    })
  }

  render(){
    if(!this.state.exhibitions || !this.state.nearby) return null
    const current = whatsOn(this.state.exhibitions)
    const currentSorted = orderByDate(current).slice(0, 10)
    // const exhibitionsNearYou = this.state.nearby.slice(0, 10)
    console.log(current, 'current')
    console.log(currentSorted, 'currentSorted')
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
        <ExhibitionsDisplay
          sectionTitle='Whats On'
          exhibitions = {currentSorted}
          errorMessage = {'Unfortunately, there aren\'t any exhibitions on display at the moment.'}/>
        {Auth.isAuthenticated &&
        <ExhibitionsDisplay
          sectionTitle = 'Recommended for you'
          errorMessage = {`Unfortunately, we don't have any recommendations for you at the moment, try ${<Link to={'/me'}>adding preferences</Link>}.`}
          exhibitions = {this.state.exhibitionsForYou}
        />}
        <ExhibitionsDisplay
          exhibitions = {this.state.nearby}
          sectionTitle = 'Near me'
          errorMessage = {'Unfortunately, there aren\'t any exhibitions on display near you.'}
        />
      </div>
    )
  }
}

export default Home
