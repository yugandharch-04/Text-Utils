import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
   <>
   <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
  <div className="container-fluid">
    <a className='navbar-brand' href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <a  className='nav-link active' href="/" >Home</a>
        </li>
        <li className="nav-item active" >
          <a className='nav-link active'  href="/about" >{props.about}</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
   </>
  )
}

Navbar.propTypes={
    title: propTypes.string,
    about: propTypes.string.isRequired
}
 //ippudu about ki is required attach chesa so
 // by chance nanu prop send cheyaka pothe appudu error vasthadhi 
 // but if you set a default prop then isrequired attach chesina error radhu
Navbar.defaultProps={
    title: "enter chey Ra Badcow"
}