import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'

const mapBoxToken = 'pk.eyJ1IjoiZ2FiZWx0b24iLCJhIjoiY2p3YXZ0bHM4MGQ3MTQzczZkaWNsb3IxNSJ9.TBiLFbNMgrlaqk8tnU1VkA'

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
    if(!this.state.exhibition || !this.state.coordinates || !mapBoxToken) return null
    const entryFee = this.state.exhibition.entry_fee
    const concessionFee = this.state.exhibition.concession_fee
    const {concession} = this.state.exhibition.user
    const {name, image, artists, venue, area, keywords} = this.state.exhibition
    return(
      <section className="section">
        <div className="container">
          <hr />
          <div className="columns">
            <div className="column is-half-desktop">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>
            <div className="column is-half-desktop">
              <h1 className="title is-3">{name}</h1>
              <p>{venue}</p>
              <p>{area}</p>
              <p>{keywords[0].name}</p>
              {concession && concessionFee? <div>
                <p>Concession ticket: {concessionFee > 0? `£${concessionFee}`: 'Free'}</p>
                <p className="is-size-7 has-text-danger">This is a concession fee. If you would like to see full price tickets displayed, you can change your preferences in your profile page.</p>
              </div>: <p>Admission price: {entryFee > 0? `£${entryFee}`: 'Free'}</p>}
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
                  <img src="../../assets/marker.png"
                    className="marker"/>
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


// {this.isEditable() && <Link to={`/events/${id}/edit`} className="button is-success">Edit</Link>}
