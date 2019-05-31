import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import editableContent from './editableContent'
import Select from 'react-select'


const EditableUsername = editableContent('div')
const EditableEmail = editableContent('div')
class UserProfile extends React.Component {

  constructor(){
    super()

    this.state = {
      options: [],
      data: {},
      editpreferences: false,
      dropdown: false
    }
    this.getOptions = this.getOptions.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.handlePreferences = this.handlePreferences.bind(this)
    this.handleAdmissionType = this.handleAdmissionType.bind(this)
    this.getUser = this.getUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }


  getOptions(){
    let options = []
    axios.get('/api/keywords')
      .then(res => options = res.data.map(keyword =>{
        return {label: keyword.name, value: keyword.id}
      }))
      .then(() => this.setState({ options }))
  }

  handleSelect(keywords){
    if(keywords !== null) {
      const keywordIds = keywords.map(keyword => parseInt(keyword.value))
      const data = { ...this.state.data, keyword_ids: keywordIds }
      this.setState({ data })
    }
  }

  toggleDropdown(){
    this.setState({ dropdown: !this.state.dropdown })
  }

  handlePreferences(){
    this.setState({ editpreferences: true })
  }

  editUser(data, state){
    const token = Auth.getToken()
    axios.put('api/me', data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(()=> this.setState({state}))
      .then(() => this.getUser())
  }

  handleSave(){
    this.editUser(this.state.data, { editpreferences: false })
  }

  handleAdmissionType(e){
    const admission = {concession: e.target.value}
    this.editUser(admission)

  }


  getUser(){
    const token = Auth.getToken()
    axios.get('/api/me', {
      headers: {
        'Authorization': `Bearer ${token}` }
    })
      .then(res => this.setState({user: res.data}))
  }

  componentDidMount(){
    this.getUser()
    this.getOptions()
  }

  render(){
    if(!this.state.user) return null
    const admissionType = this.state.user.concession? 'Concession': 'Full'
    return(
      <section className="section">
        <h1 className="title is-2">Profile info</h1>
        <h1 className="title is-4">Username:</h1>
        <EditableUsername name="username" value={this.state.user.username} />
        <h1 className="title is-4">Email:</h1>
        <EditableEmail name="email" value={this.state.user.email} />
        <h1 className="title is-4">Admission type:</h1>
        <p>Tickets are currently displayed at <strong>{admissionType}</strong>.</p>
        <button onClick={this.toggleDropdown}>Change</button>
        {this.state.dropdown &&
          <div className="control">
            <label className="radio">
              <input type="radio" name="concession" value='true' onClick={this.handleAdmissionType}/>
              Concession
            </label>
            <label className="radio">
              <input type="radio" name="concession" value='false' onClick={this.handleAdmissionType}/>
              Full Price
            </label>
          </div>}
        <hr />
        <h2 className="title is-4">Your preferences</h2>
        {this.state.user.keywords.length === 0 && <p>You have no preferences set up yet...</p>}
        <div className="tags are-medium">
          {this.state.user.keywords.map(keyword =>
            <span className="tag is-primary" key={keyword.id}>{keyword.name}</span>
          )}
        </div>
        <hr />
        {!this.state.editpreferences && <button className="button" onClick={this.handlePreferences}>Add more preferences</button>}
        {this.state.editpreferences &&
          <div>
            <h2 className="title is-4">Add preferences</h2>
            <p>Set type of exhibitions you would like to be displayed first</p>
            <div>
              <Select
                isMulti
                name="keywords"
                options={this.state.options}
                onChange={this.handleSelect}
              />
              <button className="button" onClick={this.handleSave}>Save</button>
            </div>
          </div>
        }
        <hr />
        <h2 className="title is-4">Events created by you</h2>
        <div className="columns">
          {this.state.user.events.map(exhibition=>
            <div key={exhibition.id} className="column is-one-quarter-desktop">
              <h1 className="title is-6">{exhibition.name}</h1>
              <figure>
                <img src={exhibition.image} alt={exhibition.name} />
              </figure>
            </div>
          )}
        </div>
      </section>
    )
  }
}


export default UserProfile
