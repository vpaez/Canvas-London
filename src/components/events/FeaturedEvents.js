import React from 'react'

const FeaturedEvents = () => {
  return(
    <section className="section">
      <h1 className="title-is2"> Whats on</h1>
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-one-quarter-desktop is-one-third-tablet">
            <figure>
              <img src="https://img.artrabbit.com/events/a-painted-touch-of-life/images/anCzLibCkeak/1080x1080/artrabbit.webp"/>
            </figure>
            <h2 className="title is-4">Name</h2>
            <p>Date:</p>
            <p>Venue:</p>
            <p>Entry fee:</p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default FeaturedEvents
