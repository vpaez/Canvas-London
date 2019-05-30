import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import axios from 'axios'

function whatsOn(arr) {
  return arr.filter(exhib => {

    const startSplitDate = exhib.start_date.split('/')
    const startMonth = startSplitDate[1] - 1
    const startDate = new Date(startSplitDate[2], startMonth, startSplitDate[0])

    const endSplitDate = exhib.end_date.split('/')
    const endMonth = endSplitDate[1] - 1
    const endDate = new Date(endSplitDate[2], endMonth, endSplitDate[0])

    const startParsed = Date.parse(startDate)
    const endParsed = Date.parse(endDate)
    const currentParsed = Date.parse(new Date())

    if (currentParsed > startParsed && currentParsed < endParsed ){
      return exhib
    }
  })
}

function orderByDate(arr) {
  return arr.slice().sort(function (a, b) {

    const aSplitDate = a.start_date.split('/')
    const aMonth = aSplitDate[1] - 1
    const aDate = new Date(aSplitDate[2], aMonth, aSplitDate[0])

    const bSplitDate = b.start_date.split('/')
    const bMonth = bSplitDate[1] - 1
    const bDate = new Date(bSplitDate[2], bMonth, bSplitDate[0])

    const parsedaDate = Date.parse(aDate)
    const parsedbDate = Date.parse(bDate)

    return parsedbDate - parsedaDate
  })
}




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
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    console.log(this)
    axios.get('/api/events')
      .then(res => this.setState({exhibitions: res.data}))
  }

  handleChange(e){
    console.log(e)
    axios.get('/api/events')
      .then(res => {
        if (e.label === 'Current'){
          const current = whatsOn(res.data)
          const currentSorted = orderByDate(current)
          console.log(this)
          this.setState({exhibitions: currentSorted})
        }
      })
  }


  render() {
    if(!this.state.exhibitions) return null
    console.log(this.state.options)
    return(
      <section className="section">
        <Select
          options={this.state.options}
          onChange={this.handleChange}
        />
        <div className="container">
          <div className="columns is-multiline">
            {this.state.exhibitions.map(exhibition =>
              <div className="column is-one-quarter-desktop is-one-third-tablet" key={exhibition.id}>
                <Link to={`/events/${exhibition.id}`}>
                  <figure>
                    <img src={exhibition.image} alt={exhibition.name}/>
                  </figure>
                </Link>
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
