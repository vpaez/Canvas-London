import React from 'react'
import axios from 'axios'


class UserProfile extends React.Component {

  constructor(){
    super()

    this.state = {}
  }

  componentDidMount(){
    axios.get('')
  }
  render(){
    return(
      <div>User</div>
    )
  }
}


export default UserProfile
