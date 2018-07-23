import React from 'react';
import { NavLink }  from 'react-router-dom';

export default () => 
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <NavLink className="navbar-brand" to="/">WowSandbox</NavLink>


  <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/status">Status</NavLink>
      </li>
    </ul>

</nav>