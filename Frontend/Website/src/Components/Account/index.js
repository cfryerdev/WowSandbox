import React, { Fragment } from 'react';
import { AccountConsumer } from '../../Contexts/AccountContext';
import Moment from 'react-moment';

import ActivityGraph from './ActivityGraph';

const userLevelName = (id) => {
  return id > 0 ? `Game Master Lvl ${id}` : "Normal Player"
}

export default () =>
<AccountConsumer>
  {({ user }) => (
      <Fragment>
        <div className="card mb-3">
          <h3 className="card-header bg-primary">
            Account Information
          </h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Name: <span className="text-muted"> {user.username}</span>
            </li>
            <li className="list-group-item">
              Email: <span className="text-muted"> {user.email}</span>
            </li>
            <li className="list-group-item">
              Level: <span className="text-muted"> {userLevelName(user.gmlevel)} </span>
            </li>
            <li className="list-group-item">
              Status: <span className="text-muted"> { user.online > 0 ? "✔️ Online" : "✖️ Offline" } </span>
            </li>
            <li className="list-group-item">
              Last Login: 
              <span className="text-muted"> &nbsp;
              { 
                user.last_login != null ?
                  <Moment format="MMM Do YYYY @ h:mm a">{user.last_login}</Moment>
                : "Has not logged in." 
              }
              </span>
            </li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Modify</a>
            <a href="#" className="card-link">Characters</a>
            <a href="#" className="card-link">Administration</a>
          </div>
          {/* <div className="card-footer text-muted">
            Join Date: <span className="text-muted">  1/17/2017</span>
          </div> */}
        </div>
        <div className="card text-white bg-secondary">
          <div className="card-body">
            <h4 className="card-title">Messages</h4>
            <p className="card-text">
              <span className="text-muted"> You have no messages.</span>
            </p>
          </div>
        </div>
        {/* <br />
        <div className="card text-white bg-secondary">
          <div className="card-body">
            <h4 className="card-title">Account Activity</h4>
            <p className="card-text">
              <ActivityGraph />
            </p>
          </div>
        </div> */}
      </Fragment>
  )}
</AccountConsumer>