import React from 'react'
import { Link } from 'react-router-dom'

const ExhibitionsDisplay = ({ sectionTitle, filteredExhibitions, errorMessage }) => {
  const exhibitions = filteredExhibitions
  return(
    <section className="section">
      <div className="container home has-text-centered">
        <h1 className="title is-2">{sectionTitle}</h1>
        {!exhibitions.length && <p>{errorMessage}</p>}
        <div className="tile is-ancestor">
          {exhibitions.map(exhibition =>
            <div key={exhibition.id}className="tile is-3 baby">
              <Link to={`/events/${exhibition.id}`}>
                <figure>
                  <img src={exhibition.image} alt={exhibition.name}/>
                </figure>
              </Link>
              <h2 className="title is-4">{exhibition.name}</h2>
              <p className="date"> {`${exhibition.start_date} - ${exhibition.end_date}`}</p>
              <p>{exhibition.venue}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ExhibitionsDisplay
