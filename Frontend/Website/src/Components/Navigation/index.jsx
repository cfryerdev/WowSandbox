import React from 'react';
import { NavLink }  from 'react-router-dom';
import { AccountConsumer } from '../../Contexts/AccountContext';

export default () => 
  <AccountConsumer>
      {({ isLoggedIn, errors }) => (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <NavLink className="navbar-brand" to="/">WoWSandbox</NavLink>
          <ul className="navbar-nav">
            { 
              !isLoggedIn && <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
            }
            { 
              isLoggedIn && <li className="nav-item">
                <NavLink className="nav-link" to="/account">Account</NavLink>
              </li>
            }
            { 
              isLoggedIn && <li className="nav-item">
                <NavLink className="nav-link" to="/logout">Logout</NavLink>
              </li>
            }
            { 
              !isLoggedIn && <li className="nav-item">
                <NavLink className="nav-link" to="/register">Register</NavLink>
              </li>
            }
            <li className="nav-item">
              <NavLink className="nav-link" to="/status">Status</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addons">Addons</NavLink>
            </li>
          </ul>
        </nav>
      )}
  </AccountConsumer>