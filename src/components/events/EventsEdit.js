import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

class EventsEdit extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      data: null,
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    const exhibition = {...this.state.data.exhibition, [e.target.name]: e.target.value}
    const data = {exhibition: exhibition}
    this.setState({data})
    console.log(e.target.value)
  }

  handleSubmit(e){
    e.preventDefault()
    const { area, image, name} = this.state.data.exhibition
    const exhibition = { area, image, name, keyword_ids: this.state.data.exhibition.keywords.map(keyword => keyword.id)}

    const token = Auth.getToken()
    console.log(exhibition)
    axios.put(`/api/events/${this.props.match.params.id}`, exhibition, {
      headers: {
        'Authorization': `Bearer ${token}`
      }})
      .then(res => console.log(res))
      .catch(err => console.log(err.response))
  }

  componentDidMount(){
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => {
        const data = {exhibition: res.data}
        this.setState({data})
      })
      .catch(err => this.setState({errors: err}))
  }

  render(){
    if(!this.state.data) return null
    const { exhibition } = this.state.data
    const { errors } = this.state
    return(
      <section className="section">
        <div className="container is-fluid">
          <div className="formBox">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Exhibition Name</label>
                <div className="control">
                  <input
                    className="input"
                    name="name"
                    placeholder="eg: Pierre Bonnard: The Colour of Memory"
                    onChange={this.handleChange}
                    defaultValue={exhibition.name}
                  />
                </div>
                {errors.name && <div className="help is-danger">{errors.name}</div>}
              </div>
              <div className="field">
                <label className="label">Start Date</label>
                <div className="control">
                  <input
                    className="input"
                    name="start_date"
                    placeholder="eg: 05/03/19"
                    onChange={this.handleChange}
                    value={exhibition.start_date || ''}
                  />
                </div>
                {errors.start_date && <div className="help is-danger">{errors.start_date}</div>}
              </div>
              <div className="field">
                <label className="label">End Date</label>
                <div className="control">
                  <input
                    className="input"
                    name="end_date"
                    placeholder="eg: 05/05/19"
                    onChange={this.handleChange}
                    value={exhibition.end_date || ''}
                  />
                </div>
                {errors.end_date && <div className="help is-danger">{errors.end_date}</div>}
              </div>
              <div className="field">
                <label className="label">Venue</label>
                <div className="control">
                  <input
                    className="input"
                    name="venue"
                    placeholder="eg: Tate Modern"
                    onChange={this.handleChange}
                    value={exhibition.venue || ''}
                  />
                </div>
                {errors.venue && <div className="help is-danger">{errors.venue}</div>}
              </div>
              <div className="field">
                <label className="label">Area</label>
                <div className="control">
                  <input
                    className="input"
                    name="area"
                    placeholder="eg: Central"
                    onChange={this.handleChange}
                    value={exhibition.area || ''}
                  />
                </div>
                {errors.area && <div className="help is-danger">{errors.area}</div>}
              </div>
              <div className="field">
                <label className="label">Entry Fee</label>
                <div className="control">
                  <input
                    className="input"
                    name="entry_fee"
                    type="number"
                    placeholder="eg: 15"
                    onChange={this.handleChange}
                    value={exhibition.entry_fee || ''}
                  />
                </div>
                {errors.entry_fee && <div className="help is-danger">{errors.entry_fee}</div>}
              </div>
              <div className="field">
                <label className="label">Image (optional)</label>
                <div className="control">
                  <input
                    className="input"
                    name="image"
                    placeholder="eg: https://www.tate.org.uk/sites/default/files/styles/width-420/public/le_jardin_v.2_1.jpg"
                    onChange={this.handleChange}
                    value={exhibition.image || ''}
                  />
                </div>
                {errors.image && <div className="help is-danger">{errors.image}</div>}
              </div>
              <div className="field">
                <label className="label">Artist(s)</label>
                <div className="control">
                  <input
                    className="input"
                    name="artists"
                    placeholder="eg: https://www.tate.org.uk/sites/default/files/styles/width-420/public/le_jardin_v.2_1.jpg"
                    onChange={this.handleChange}
                    value={exhibition.artists[0].name || ''}
                  />
                </div>
                {errors.artists && <div className="help is-danger">{errors.artists}</div>}
              </div>
              <button className="button is-dark">Submit</button>
            </form>
          </div>
        </div>
      </section>

    )
  }
}

export default EventsEdit
