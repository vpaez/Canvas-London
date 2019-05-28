import React from 'react'
import SearchBar from 'react-native-elements'
import FeaturedEvents from '../../components/events/FeaturedEvents.js'


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
