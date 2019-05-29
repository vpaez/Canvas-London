import React from 'react'
import axios from 'axios'

class EventsShow extends React.Component {
  constructor(){
    super()

    this.state = {}
  }

  componentDidMount(){
    axios.get(`api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ exhibition: res.data }))
  }

  render(){
    if(!this.state.exhibition) return null
    const {name, image, artists, venue, area, keywords} = this.state.exhibition
    return(
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half-desktop">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>
            <div className="column is-half-desktop">
              <h1 className="title is-3">{name}</h1>
              <p>{artists}</p>
              <p>{venue}</p>
              <p>{area}</p>
              <p>{keywords[0].name}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default EventsShow
