import React from 'react'

const Team = () => {
  return (
    <div className="container teamContainer">
      <div className=" section columns  teambox">
        <div className="column">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img  className="is-rounded" src="https://i.imgur.com/fZXBxMO.jpg" alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Violeta Paez Armando</strong> <small>violetapaezarmando@gmail.com</small>
                    <br />
                        API ninja
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img className="is-rounded" src="https://i.imgur.com/Nj2rE9g.jpg" alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Gabe Naughton</strong> <small>gabriel.naughton135@gmail.com</small>
                    <br />
                      Code Connoisseur
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Team
