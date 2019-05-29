import React from 'react'
import FeaturedEvents from '../../components/events/FeaturedEvents'
import SearchBar from '../../components/common/SearchBar'
import axios from 'axios'

class Home extends React.Component {

  constructor(){
    super()
    this.state = {
      exhibitions: null
    }
  }

  componentDidMount(){
    axios.get('/api/events')
      .then(res => this.setState({exhibitions: res.data}))
  }

  render(){
    if(!this.state.exhibitions) return null
    return(
      <div>
        <section className="hero is-fullheight video">
          <div className="hero-video">
            <video poster="https://img.artrabbit.com/events/a-painted-touch-of-life/images/anCzLibCkeak/1080x1080/artrabbit.webp" id="home-video" playsInline autoPlay muted loop>
              <source src="" type="video/webm" />
            </video>
            <div className="container">
              <h1 className="title">
                Title Home
              </h1>
            </div>
          </div>
        </section>
        <FeaturedEvents
          exhibitions={this.state.exhibitions}/>
        <SearchBar />
      </div>
    )
  }
}

export default Home
