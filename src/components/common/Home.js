import React from 'react'
import FeaturedEvents from '../../components/events/FeaturedEvents'
import SearchBar from '../../components/common/SearchBar'

class Home extends React.Component {
  render(){
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
        <FeaturedEvents />
        <SearchBar />
      </div>
    )
  }
}

export default Home
