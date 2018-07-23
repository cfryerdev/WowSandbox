import React, { Fragment } from 'react';
import { NavLink }  from 'react-router-dom';
import Loading from '../Common/Loading';
//import FetchContainer from '../../Containers/FetchContainer';

// 401: https://www.mocky.io/v2/5b4bbad03100006300a7de42
// 403: https://www.mocky.io/v2/5b4bbafd3100001901a7de43

export default class Administration extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoading: true
    };
    this.loadFakeRequest();
  }

  loadFakeRequest = () => {
    fetch("https://www.mocky.io/v2/5b4bbad03100006300a7de42")
      .then(response => response.json())
      .then(data => {
        // DO SOMETHING HERE
        this.setState({ isLoading: false });
      })
      .catch(function (err) {
        this.setState({ isLoading: false });
        console.error(err);
      });
  }

  render() {
    return (
      !this.isLoading ? <Loading /> : 
      <Fragment>

        <NavLink to="/account">Back to Account</NavLink>
        <br />
        <br />

        <h4>Services</h4>
        <button type="button" className="btn btn-warning">Kick Online Users</button>
        &nbsp;
        <button type="button" className="btn btn-danger">Reboot Services</button>

        <br />
        <br />
        <br />
        <h4>Realms</h4>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Altar of Storms	
            <button type="button" className="btn btn-outline-info">Edit</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Andorhal
            <button type="button" className="btn btn-outline-info">Edit</button>
          </li>
        </ul>
        <br />
        <button type="submit" className="btn btn-success">Create</button>
        
        <br />
        <br />
        <br />
        <h4>Settings</h4>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <button type="submit" className="btn btn-primary">Update</button>

      </Fragment>
    );
  }
}
