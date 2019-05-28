import React from 'react'
import Select from 'react-select'

const list = [
  {label: 'a', value: 'a'},
  {label: 'b', value: 'b'},
  {label: 'c', value: 'c'},
  {label: 'd', value: 'd'},
  {label: 'e', value: 'e'}
]

class SearchBar extends React.Component {
  constructor(){
    super()
    this.state = {
      selectedOption: null,
      list: list
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({selectedOption: {value: e.value, label: e.label }})
  }
  render(){
    return(
      <div>
        <Select
          value={this.state.selectedOption}
          options={this.state.list}
          onChange={this.handleChange}
          placeholder="Search..."/>
      </div>
    )
  }

}

export default SearchBar

// https://medium.com/path2code/create-suggested-search-bar-with-react-select-f24fa3c5c3b
