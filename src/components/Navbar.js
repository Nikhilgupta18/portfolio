import React from 'react'
import PropTypes from 'prop-types';
import ngsu from '../media/ngsu.png';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
        {/* <a className="navbar-brand text-white" href="/">{props.title}</a> */}
        <Link className="navbar-brand text-white" to="/"><img src={ngsu} width={100} alt=''/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-5">
                <Link className="nav-link active text-white" aria-current="page" to="/resume">Resume</Link>
            </li>
            <li className="nav-item ms-5">
                <Link className="nav-link text-white" to="/about">About</Link>
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

