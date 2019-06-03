import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import editableContent from './editableContent'
import Select from 'react-select'
import Promise from 'bluebird'
import Avatar from 'react-avatar'


const EditableUsername = editableContent('div')
const EditableEmail = editableContent('div')
class UserProfile extends React.Component {

  constructor(){
    super()

    this.state = {
      options: [],
      data: {},
      editPreferences: false,
      dropdown: false,
      defaultValue: {value: null, label: 'Select'}
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.handlePreferences = this.handlePreferences.bind(this)
    this.handleAdmissionType = this.handleAdmissionType.bind(this)
    this.editUser = this.editUser.bind(this)
  }



  handleSelect(keywords){
    if(keywords !== null) {
      const keywordIds = keywords.map(keyword => parseInt(keyword.value))
      const data = { ...this.state.data, keyword_ids: keywordIds }
      this.setState({ data, selectedOptions: keywords })
    }
  }

  toggleDropdown(){
    this.setState({ dropdown: !this.state.dropdown })
  }

  handlePreferences(){
    this.setState({ editPreferences: true })
  }

  editUser(data){
    const token = Auth.getToken()
    axios.put('api/me', data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res)=> {
        this.setState({data: {...this.state.data, user: res.data}})
      })
  }

  handleSave(){
    this.editUser({keyword_ids: this.state.data.keyword_ids})
    this.setState({editPreferences: false, selectedOptions: null})
  }

  handleAdmissionType(e){
    const admission = {concession: e.target.value}
    this.editUser(admission)

  }



  componentDidMount(){
    const token = Auth.getToken()
    const headers = { headers: {'Authorization': `Bearer ${token}` }}

    Promise.props({
      user: axios.get('/api/me', {...headers}).then(res => res.data),
      contacts: axios.get('/api/contacts', {...headers}).then(res => res.contacts),
      keywords: axios.get('/api/keywords').then(res => res.data =  res.data.map(keyword =>{
        return {label: keyword.name, value: keyword.id}
      }))
    })
      .then(res => console.log(res))
      // .then(res => this.setState({ data: {...this.state.data, options: res.keywords, user: res.user, contacts: res.contacts}}))
      .then(() =>console.log(this.state))
      .catch(err => console.log(err))
  }

  render(){
    if(!this.state.data.user) return null
    const { user, contacts } = this.state.data
    const admissionType = user.concession? 'Concession': 'Full'
    return(
      <section className="section user-profile">
        <div className="columns">
          <div className="column is-one-third-desktop has-text-centered">
            <div className="container profile-info">
              <Avatar name={user.username} value="100%" size="200" round={true} src={`../assets/${user.avatar}`} className="user-avatar"/>
              <EditableUsername className="title is-2" name="username" value={user.username}/>
              <EditableEmail className="subtitle" name="email" value={user.email} />
            </div>
          </div>
          <div className="column is-two-thirds-desktop">
            <div className="container">


              <h1 className="title is-4 is-spaced">Admission type</h1>
              <p className="subtitle is-6">Tickets are currently displayed at <strong>{admissionType}</strong> price. <a className="subtitle is-6 has-text-link" onClick={this.toggleDropdown}>Change</a></p>
              {this.state.dropdown &&
              <form>
                <div className="control has-addons-centered">
                  <label className="radio">
                    <input type="radio" name="concession" value='true' onClick={this.handleAdmissionType}/>
                  Concession
                  </label>
                  <label className="radio">
                    <input type="radio" name="concession" value='false' onClick={this.handleAdmissionType}/>
                  Full Price
                  </label>
                </div>
              </form>}
            </div>

          <div className="container">
          <div className="columns">
            <div className="column">
            <h2 className="title is-4">Your preferences</h2>
            {user.keywords.length === 0 && <p>You have no preferences set up yet...</p>}
            <div className="tags are-medium">
              {user.keywords.map(keyword =>
                <span className="tag is-dark is-rounded" key={keyword.id}>{keyword.name}</span>
              )}
            </div>
              <div className="column">
              {!this.state.editPreferences && <button className="button" onClick={this.handlePreferences}>Add more preferences</button>}
              </div>
            {this.state.editPreferences &&
                  <div>
                    <h2 className="title is-4">Add preferences</h2>
                    <p>Set type of exhibitions you would like to be displayed first</p>
                    <div>
                      <Select
                        isMulti
                        name="keywords"
                        options={this.state.data.options}
                        onChange={this.handleSelect}
                      />
                      <button className="button" onClick={this.handleSave}>Save</button>
                    </div>
                  </div>
            }
            </div>
            </div>
            </div>
          </div>
        </div>
        {contacts && <div>
          <h2 className="title is-4">Other users with similar taste</h2>
          {contacts.map(contact =>
            <div key={contact.id}>
              <h1 className="title">{contact.username}</h1>
              <div className="tags are-normal">{contact.interests.map(interest =>
                <span className="tag is-primary"key={interest}>{interest}</span>)}
              </div>
            </div>
          )}
        </div>
        }
        <hr />
        <h2 className="title is-4">Events created by you</h2>
        <div className="columns">
          {user.events.map(exhibition=>
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
