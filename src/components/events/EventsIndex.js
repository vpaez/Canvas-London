import React from 'react'
import Select from 'react-select'
import axios from 'axios'

class EventsIndex extends React.Component {
  constructor(){
    super()
    this.state = {
      options: [
        {label: 'Past', value: 'Past'},
        {label: 'Current', value: 'Current'},
        {label: 'Upcoming', value: 'Upcoming'}
      ],
      events: null
    }
  }

  componentDidMount(){
    axios.get('/api/events')
      .then(res => this.setState({exhibitions: res.data}))
  }
  render() {
    if(!this.state.exhibitions) return null
    return(
      <section className="section">
        <Select
          options={this.state.options}
        />
        <div className="container">
          <div className="columns is-multiline">
            {this.state.exhibitions.map(exhibition =>
              <div key={exhibition.id} className="column is-one-quarter-desktop is-one-third-tablet">
                <figure>
                  <img src="https://img.artrabbit.com/events/a-painted-touch-of-life/images/anCzLibCkeak/1080x1080/artrabbit.webp"/>
                </figure>
                <h2 className="title is-4">{exhibition.name}</h2>
                <p>Date: {`${exhibition.start_date} - ${exhibition.end_date}`}</p>
                <p>{exhibition.venue}</p>
                <p>{exhibition.area}</p>
                <p>Entry fee: {exhibition.entry_fee}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}


export default EventsIndex
