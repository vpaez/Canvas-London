import React from 'react'
import { compose } from 'recompose'
import WithSlicing from './WithSlicing'


function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading, sectionTitle, filterFunction, keywords, exhibitions, ...props }) {
    if (!isLoading && sectionTitle === 'Recommended for you' && !keywords) {
      return (
        <Component
          filteredExhibitions={[]}
          {...props}
        />
      )
    } else if (!isLoading) {
      const FilteredExhibitionTiles = compose(filterFunction, WithSlicing)(Component)
      return (
        <FilteredExhibitionTiles
          exhibitions={exhibitions}
          keywords={keywords}
          {...props}
        />)
    } else return (
      <div className="container home">
        <div className="columns custom-loader">
          <div className="column is-half is-offset-one-quarter has-text-centered">
            <figure className="image is-96x96">
              <img src="./assets/loader.png" alt="Loading"/>
            </figure>
            <h1 className="title is-4 has-text-grey-light">Loading...</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default WithLoading
