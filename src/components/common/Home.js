import React from 'react'
import FeaturedEvents from '../../components/events/FeaturedEvents'
import RecommendedEvents from '../../components/events/RecommendedEvents'
import NearMe from '../../components/events/NearMe'
import axios from 'axios'
import Auth from '../../lib/Auth'
import HomeNavbar from '../common/HomeNavbar'



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
    const current = whatsOn(this.state.exhibitions)
    const currentSorted = orderByDate(current).slice(0, 10)
    console.log(current, 'current')
    console.log(currentSorted, 'currentSorted')
    return(
      <div>
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-light is-1">
      Canvas
              </h1>
              <h2 className="subtitle has-text-light">
      Art Shows in London
              </h2>
            </div>
          </div>
        </section>
        <HomeNavbar />
        <FeaturedEvents
          exhibitions={currentSorted}/>
        {Auth.getToken() && <RecommendedEvents />}
        <NearMe />
      </div>
    )
  }
}

export default Home
