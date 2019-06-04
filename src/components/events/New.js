import React from 'react'
import axios from 'axios'
import Form from './Form'
import Auth from '../../lib/Auth'

class New extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {},
      errors: {},
      events: null,
      options: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  
  handleSelect(keywords){
    const keywordIds = keywords.map(keyword => keyword.value)
    const data = { ...this.state.data, keyword_ids: keywordIds }
    this.setState({ data })
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }
  postToDb(){
    const token = Auth.getToken()

    axios.post('/api/events', this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/events'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleSubmit(e) {
    e.preventDefault()

    const data = { ...this.state.data, keyword_ids: this.state.keywords}
    this.setState({ data }, this.postToDb() )
    console.log(this.state.data)

  }

  componentDidMount() {
    axios.get('/api/keywords')
      .then(res => {
        const keywords = res.data.map(keyword => {
          console.log(keyword)
          return { value: keyword.id, label: keyword.name }
        })
        return keywords
      })
      .then(res => this.setState({ options: res }))
  }

  render() {
    console.log(this.state)
    if(!this.state.options) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <Form
                handleSelect={this.handleSelect}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                data={this.state.data}
                errors={this.state.errors}
                options={this.state.options}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default New
