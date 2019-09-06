import React from 'react'
import ExhibitionTiles from './ExhibitionTiles'
import WithLoading from '../common/WithLoading'



const ExhibitionsDisplay = ({ sectionTitle, isLoading, filterFunction, exhibitions, ...props }) => {
  const ExhibitionTilesWithLoading = WithLoading(ExhibitionTiles)
  return(
    <section className="section">
      <div className="container home has-text-centered">
        <h1 className="title is-2">{sectionTitle}</h1>
        <ExhibitionTilesWithLoading
          isLoading={isLoading}
          exhibitions={exhibitions}
          filterFunction={filterFunction}
          sectionTitle={sectionTitle}
          {...props}
        />
      </div>
    </section>
  )
}

export default ExhibitionsDisplay
