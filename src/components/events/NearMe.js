import React from 'react'
import axios from 'axios'


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
          console.log(this.state)
          const nearby = this.state.exhibitions.filter(exhibition =>{
            console.log(longitude, exhibition.lng)
            console.log('yoooooo')
            return (calculateDistance(longitude, latitude, exhibition.lng, exhibition.lat, 3 ) < 2000)

          })

          this.setState({ nearby })
        })
      })


  }


  render(){
    console.log(this.state)









    if ( !this.state.nearby) return null
    console.log(this.state.nearby)
    return(
      <div className="container">
        <h1 className="title">Near you</h1>
        <div className="columns is-multiline">
          {this.state.nearby.map(exhibition =>
            <div key={exhibition.id} className="column is-one-quarter-desktop">
              <figure>
                <img src={exhibition.image}/>
              </figure>
              <h1 className="title is-4">{exhibition.name}</h1>
            </div>
          )}
        </div>
      </div>
    )
  }



}


export default NearMe
