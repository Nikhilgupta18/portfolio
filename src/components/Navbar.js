import React from 'react'
import PropTypes from 'prop-types';
import ngsu from '../media/ngsu.png';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
        {/* <a className="navbar-brand text-white" href="/">{props.title}</a> */}
        <a className="navbar-brand text-white" href="/"><img src={ngsu} width={100}/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-5">
                <a className="nav-link active text-white" aria-current="page" href="/">Resume</a>
            </li>
            <li className="nav-item ms-5">
                <a className="nav-link text-white" href="/">About</a>
            </li>
            
            
            </ul>
            
        </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string
};

