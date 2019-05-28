import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/common/Navbar'
import EventsIndex from './components/events/EventsIndex'
import 'bulma'


class App extends React.Component {
  render(){
    return(
      <div>
        <Navbar />
        <EventsIndex />
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
