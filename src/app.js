import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import 'bulma'

import Navbar from './components/common/Navbar'
import EventsIndex from './components/events/EventsIndex'
import Home from './components/common/Home'


class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path='/events' component={EventsIndex} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
