import React from 'react'

const AvatarsForm = ({handleChange}) => {
  return(
    <div className="field avatar-form">
      <div className="columns">
        <div className="column">
          <div className="control">
            <button type="button" onClick={handleChange}>
              <figure className="image is-96x96">
                <img
                  src="https://i.imgur.com/vjvpOox.jpg"
                  alt="Orange avatar"
                  name="avatar"
                  data-value="https://i.imgur.com/vjvpOox.jpg"
                />
              </figure>
            </button>
          </div>
        </div>
        <div className="column">
          <div className="control">
            <button type="button" onClick={handleChange}>
              <figure className="image is-96x96">
                <img
                  src="https://i.imgur.com/iwYxNbB.jpg"
                  alt="Pink avatar"
                  name="avatar"
                  data-value="https://i.imgur.com/iwYxNbB.jpg"
                />
              </figure>
            </button>
          </div>
        </div>
        <div className="column">
          <div className="control">
            <button type="button" onClick={handleChange}>
              <figure className="image is-96x96">
                <img
                  src="https://i.imgur.com/GkO3ix0.jpg"
                  alt="Blue avatar"
                  name="avatar"
                  data-value="https://i.imgur.com/GkO3ix0.jpg"
                />
              </figure>
            </button>
          </div>
        </div>
        <div className="column">
          <div className="control">
            <button type="button" onClick={handleChange}>
              <figure className="image is-96x96">
                <img
                  src="https://i.imgur.com/p25szCt.jpg"
                  alt="Green avatar"
                  name="avatar"
                  data-value="https://i.imgur.com/p25szCt.jpg"
                />
              </figure>
            </button>
          </div>
        </div>
      </div>
      <label className="label has-text-centered">Select an avatar</label>
    </div>
  )
}

export default AvatarsForm
