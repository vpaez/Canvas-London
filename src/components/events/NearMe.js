import React from 'react'
import axios from 'axios'
import ExhibitionsDisplay from './ExhibitionsDisplay'


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


class NearMe extends React.Component {
  constructor(){
    super()
    this.state = {}
  }
  componentDidMount(){

    axios.get('/api/events')
      .then(res => this.setState({exhibitions: res.data }))
      .then(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords
          const nearby = this.state.exhibitions.filter(exhibition =>{
            return (calculateDistance(longitude, latitude, exhibition.lng, exhibition.lat, 3 ) < 2000)
          })

          this.setState({ nearby })
        })
      })


  }


  render(){
    if (!this.state.nearby) return null
    console.log(this.state.nearby)
    const exhibitions = this.state.nearby.slice(0, 10)
    return(
      <ExhibitionsDisplay
        exhibitions = {exhibitions}
        sectionTitle = 'Near me'
        errorMessage = {'Unfortunately, there aren\'t any exhibitions on display near you.'}
      />
    )
  }



}


export default NearMe
