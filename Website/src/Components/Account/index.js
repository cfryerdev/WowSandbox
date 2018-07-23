import React, { Fragment } from 'react';
import { NavLink }  from 'react-router-dom';

import ActivityGraph from './ActivityGraph';

export default () =>
<Fragment>

  <div className="card mb-3">
    <h3 className="card-header bg-primary">
      Account Information
    </h3>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        Name: <span className="text-muted float-right"> SomeAccountName</span>
      </li>
      <li className="list-group-item">
        Email: <span className="text-muted float-right"> test@email.com</span>
      </li>
      <li className="list-group-item">
        Level: <span className="text-muted float-right"> GM 4 </span>
      </li>
      <li className="list-group-item">
        Status: <span className="text-muted float-right"> Active </span>
      </li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link">Modify</a>
      <NavLink to="/account/characters" className="card-link">Characters</NavLink>
      <NavLink to="/administration" className="card-link">Administration</NavLink>
    </div>
    <div className="card-footer text-muted">
      Join Date: <span className="text-muted">  1/17/2017</span>
    </div>
  </div>

  <div className="card text-white bg-secondary">
    <div className="card-body">
      <h4 className="card-title">Account Activity</h4>
      <p className="card-text">
        <ActivityGraph />
      </p>
    </div>
  </div>

  <br />

  <div className="card text-white bg-secondary">
    <div className="card-body">
      <h4 className="card-title">Messages</h4>
      <p className="card-text">
        <span className="text-muted"> You have no messages.</span>
      </p>
    </div>
  </div>

</Fragment>