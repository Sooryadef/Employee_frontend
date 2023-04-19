import React from 'react'
import {Link,NavLink} from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
      <Link className="navbar-brand" href="/">Employee</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div classNameName="collapse navbar-collapse" >
        <ul className="navbar-nav me-auto">
          <li className="nav-item ">
            <NavLink className="nav-link " exact to="/">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about">About</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      <Link className="btn btn-outline-light" to="/Employee/AddEmployee">Add Employee</Link>

    </div>
    </nav>
  )
}

export default Navbar