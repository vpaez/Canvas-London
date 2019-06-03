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
    navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords
      this.setState({ location: { lat: latitude, lon: longitude } })
    })
    axios.get('/api/events')
      .then(res => {

        this.setState({exhibitions: res.data})
        const empty = []

        this.state.exhibitions.filter(exhibition =>{

          axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${exhibition.venue}&key=7be1f0737d694364bb498795cd346bf3`)
            .then(res => {
              const venueCoordinates = res.data.results[0].geometry
              console.log(venueCoordinates)
              console.log(exhibition)

              if (calculateDistance(this.state.location.lon,this.state.location.lat, venueCoordinates.lng, venueCoordinates.lat, 3 ) < 2000){

                console.log('done')

                console.log(exhibition)

                console.log(this.state)
                empty.push(exhibition)

              }
            })

        })
        this.setState( {nearby: empty}  )
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
