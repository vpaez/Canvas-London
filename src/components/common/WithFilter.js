import React from 'react'



function WithFilter(Component) {
  return function WithFilterComponent({ exhibitions, ...props }) {
    return (<Component
      filteredExhibitions={exhibitions}
      {...props}
    />)
  }
}

export default WithFilter
