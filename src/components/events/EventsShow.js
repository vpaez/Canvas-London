import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'

const mapBoxToken = 'pk.eyJ1IjoiZ2FiZWx0b24iLCJhIjoiY2p3YXZ0bHM4MGQ3MTQzczZkaWNsb3IxNSJ9.TBiLFbNMgrlaqk8tnU1VkA'
console.log(mapBoxToken)

const Map = ReactMapboxGl({
  accessToken: mapBoxToken
})

class EventsShow extends React.Component {
  constructor(){
    super()

    this.state = {}
    this.isEditable = this.isEditable.bind(this)
  }

  componentDidMount(){
    axios.get(`api/events/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ exhibition: res.data })
        console.log(res.data, 'res.data')
        console.log(this.state)
      })
      .then( () => {
        axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${this.state.exhibition.venue}&key=7be1f0737d694364bb498795cd346bf3`)
          .then(res => {
            console.log(res)
            this.setState({ coordinates: res.data.results[0].geometry})
            console.log(this.state.coordinates, 'coordinates')
          })
        console.log(this.state.coordinates)
      })

  }

  isEditable(){
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.exhibition.user.id
  }

  render(){
    console.log(this.state.exhibition)
    console.log(this.state)
    if(!this.state.exhibition || !this.state.coordinates || !mapBoxToken) return null
    const {name, image, artists, venue, area, keywords, id} = this.state.exhibition
    return(
      <section className="section">
        <div className="container">
          {this.isEditable() && <Link to={`/events/${id}/edit`} className="button is-success">Edit</Link>}
          <hr />
          <div className="columns">
            <div className="column is-half-desktop is-flex">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>
            <div className="column is-half-desktop" id='flexColumn'>
              <h1 className="title is-3">{name}</h1>
              <p>{venue}</p>
              <p>{area}</p>
              <p>{keywords[0].name}</p>
              <hr />
              <h1 className="title is-6">Artists:</h1>
              <nav className="level">
                {artists.map(artist =>
                  <div key={artist.id} className="level-left">
                    <div className="level-item has-text-centered">
                      <Link to={`/artists/${artist.id}`}
                        className="link is-info">
                        {artist.name}
                      </Link>
                    </div>
                  </div>
                )}
              </nav>



              <Map
                className='venueMap'
                style='mapbox://styles/mapbox/streets-v10'
                center={this.state.coordinates}
                zoom={[15]}
                containerStyle={{
                  height: '400px',
                  width: '400px'
                }}
              >
                <Marker key={this.state.exhibition.id}
                  coordinates={[this.state.coordinates.lng, this.state.coordinates.lat]}
                  anchor="bottom">
                </Marker>

              </Map>

            </div>
          </div>
        </div>

      </section>



    )
  }
}

export default EventsShow
