import React, { Fragment } from 'react';
import { NavLink }  from 'react-router-dom';

export default () => 
<Fragment>
  <NavLink to="/account">Back to Account</NavLink>
  <br />
  <br />

  <div className="card mb-3">
    <h3 className="card-header bg-primary">
      User Controls
    </h3>
    <div className="card-body">
      <button type="button" className="btn btn-warning">Kick Online Users</button>
      &nbsp;
      <button type="button" className="btn btn-danger">Reboot Services</button>
    </div>
  </div>

  <div className="card mb-3">
    <h3 className="card-header bg-primary">
      Realms Controls
    </h3>
    <div className="card-body">
      &nbsp;
    </div>
  </div>

  <div className="card mb-3">
    <h3 className="card-header bg-primary">
      Service Controls
    </h3>
    <div className="card-body">
      <div className="form-group">
        <label>External IP Address</label>
        <input type="text" className="form-control" placeholder="127.0.0.1" />
      </div>

      <button type="submit" className="btn btn-primary">Update</button>
    </div>
  </div>
</Fragment>