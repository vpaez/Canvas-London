import React from 'react'


function handleRecommendedExhibitions(exhibitions, keywords) {
  return exhibitions.filter(exhibition => {
    const match = exhibition.keywords.filter(keyword =>{
      if(keywords.includes(keyword.id)) return keyword
    }).length
    if(match) return exhibition
  })
}



function WithRecommendedFilter(Component) {
  return function WithRecommendedFilterComponent({ exhibitions, keywords, ...props }) {
    return (<Component
      filteredExhibitions={handleRecommendedExhibitions(exhibitions, keywords)}
      {...props}
    />)
  }
}

export default WithRecommendedFilter
