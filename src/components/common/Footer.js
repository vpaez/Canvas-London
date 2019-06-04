import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return(
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Canvas</strong> by <Link to={'/team'}>Violeta and Gabe</Link>
        </p>
      </div>
    </footer>
  )

}

export default Footer
