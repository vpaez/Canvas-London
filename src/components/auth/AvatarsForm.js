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
                  src="/../../assets/avatar1.jpg"
                  alt="Orange avatar"
                  name="avatar"
                  data-value="avatar1.jpg"
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
                  src="/../../assets/avatar2.jpg"
                  alt="Pink avatar"
                  name="avatar"
                  data-value="avatar2.jpg"
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
                  src="/../../assets/avatar3.jpg"
                  alt="Blue avatar"
                  name="avatar"
                  data-value="avatar3.jpg"
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
                  src="/../../assets/avatar4.jpg"
                  alt="Green avatar"
                  name="avatar"
                  data-value="avatar4.jpg"
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
