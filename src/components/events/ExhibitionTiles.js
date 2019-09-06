import React from 'react'
import { Link } from 'react-router-dom'

const ExhibitionsTiles = ({filteredExhibitions, errorMessage}) => {
  const exhibitions = filteredExhibitions
  return(
    <div className="tile is-ancestor">
      {!exhibitions.length && <p>{errorMessage}</p>}
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
  )
}

export default ExhibitionsTiles
