import React from 'react'
import axios from 'axios'


class ArtistShow extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    axios.get(`/api/artists/${this.props.match.params.id}`)
      .then(res => this.setState({artist: res.data}))
      .catch(err => console.log(err))
  }
  render() {
    const { artist } = this.state
    if(!artist) return null
    return(
      <section className="section artist-show">
        <div className="container has-text-justified">
          {artist.image && <figure className="image">
            <img src={artist.image} alt={artist.name} />
          </figure>}
          <h1 className="title is-2 has-text-centered">{artist.name}</h1>
          <p>{artist.description}</p>
        </div>
      </section>
    )

  }
}

export default ArtistShow
