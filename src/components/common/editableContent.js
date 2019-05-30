import React from 'react'
import axios from 'axios'
function contentEditable(WrappedComponent) {

  return class contentEditable extends React.Component {
    constructor(){
      super()

      this.state = {
        editable: false,
        button: 'Edit'
      }
      this.buttonClick = this.buttonClick.bind(this)
    }

    buttonClick(e){
      console.log(e)
      this.state.button? this.setState({button: null, editable: true}) : this.setState({button: 'Edit', editable: false})
      if(this.state.button === null) {
        axios.get('')
      }
    }

    render(){
      return(
        <WrappedComponent
          {...this.props}
          contentEditable={this.state.editable}
        >
          {this.props.value}
          <button className="button is-success" onClick={this.buttonClick}>{this.state.button? this.state.button: 'Save'}</button>
        </WrappedComponent>
      )
    }


  }

}

export default contentEditable
