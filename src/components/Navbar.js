import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" href="#">{props.title}</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>

        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/about">{props.about}</Link> */}
          <a className="nav-link" href="https://github.com/ShivamDeadlocker">{props.about}</a>

        </li>   
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}


<button type="button" className="btn btn-success mx-2" onClick={() => props.setModeColor('#198754', 'Green')}>Green</button>
<button type="button" className="btn btn-danger mx-2"  onClick={() => props.setModeColor('#dc3545', 'Red')}>Red</button>
<button type="button" className="btn btn-warning mx-2" onClick={() => props.setModeColor('#ffc107', 'Yellow')}>Yellow</button>
<button type="button" className="btn btn-info mx-2" onClick={() => props.setModeColor('#0dcaf0', 'Blue')}>Blue</button>


<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>

    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {title: "TextUtils",
    about: "About"
}