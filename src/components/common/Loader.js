import React from 'react'



function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />)
    return (
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
