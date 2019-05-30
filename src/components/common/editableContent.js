import React from 'react'
import axios from 'axios'
function contentEditable(WrappedComponent) {

  return class contentEditable extends React.Component {
    constructor(){
      super()

      this.state = {
        editable: false,
        button: false,
        user: {}
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleSave = this.handleSave.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
      console.log(e)
    }
    handleClick(){
      this.setState({button: !this.state.button})
    }
    handleSave(e){
      console.log(e)
      this.setState({editable: false})

      axios.post('/api/me')
    }

    render(){
      return(
        <WrappedComponent
          {...this.props}>
          <div contentEditable={this.state.editable} >{this.props.value}</div>
          {this.state.button && <button className="button is-success" onClick={this.handleSave}>Save</button> }
        </WrappedComponent>
      )
    }


  }

}

export default contentEditable
