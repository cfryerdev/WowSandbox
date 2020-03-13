import React from 'react';
import { NavLink }  from 'react-router-dom';

export default () => 
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <NavLink className="navbar-brand" to="/">WunCraft</NavLink>


  <ul class="navbar-nav">
      <li class="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/status">Status</NavLink>
      </li>
    </ul>

</nav>