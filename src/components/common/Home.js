import React from 'react'
import FeaturedEvents from '../../components/events/FeaturedEvents'
import SearchBar from '../../components/common/SearchBar'

class Home extends React.Component {
  render(){
    return(
      <div>
        <section className="hero is-info is-large">
          <div className="hero-body">
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
