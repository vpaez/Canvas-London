import React from 'react'
import Select from 'react-select'

class EventsIndex extends React.Component {
  constructor(){
    super()
    this.state = {
      options: [
        {label: 'Past', value: 'Past'},
        {label: 'Current', value: 'Current'},
        {label: 'Upcoming', value: 'Upcoming'}
      ]
    }
  }
  render() {
    return(
      <section className="section">
        <Select
          options={this.state.options}
        />
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-one-quarter-desktop is-one-third-tablet">
              <figure>
                <img src="https://img.artrabbit.com/events/a-painted-touch-of-life/images/anCzLibCkeak/1080x1080/artrabbit.webp"/>
              </figure>
              <h2 className="title is-4">Name</h2>
              <p>Date:</p>
              <p>Venue:</p>
              <p>Entry fee:</p>
            </div>
            <div className="column is-one-quarter-desktop is-one-third-tablet">
              <figure>
                <img src="https://img.artrabbit.com/events/a-painted-touch-of-life/images/anCzLibCkeak/1080x1080/artrabbit.webp"/>
              </figure>
              <h2 className="title is-4">Name</h2>
              <p>Date:</p>
              <p>Venue:</p>
              <p>Entry fee:</p>
            </div>
            <div className="column is-one-quarter-desktop is-one-third-tablet">
              <figure>
                <img src="https://img.artrabbit.com/events/a-painted-touch-of-life/images/anCzLibCkeak/1080x1080/artrabbit.webp"/>
              </figure>
              <h2 className="title is-4">Name</h2>
              <p>Date:</p>
              <p>Venue:</p>
              <p>Entry fee:</p>
            </div>
            <div className="column is-one-quarter-desktop is-one-third-tablet">
              <figure>
                <img src="https://img.artrabbit.com/events/a-painted-touch-of-life/images/anCzLibCkeak/1080x1080/artrabbit.webp"/>
              </figure>
              <h2 className="title is-4">Name</h2>
              <p>Date:</p>
              <p>Venue:</p>
              <p>Entry fee:</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default EventsIndex
