import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';

export default class RealmsList extends Component {
  
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <Fragment>
        <ul className="list-group squared">
          <li className="list-group-item header d-flex justify-content-between align-items-center">
            Server Status
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Auth Server
            {
              this.props.data.auth 
                  ? <i className="fas fa-check-circle text-success"></i>
                  : <i className="fas fa-times-circle text-danger"></i>
            }
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            World Server
            {
              this.props.data.world 
                  ? <i className="fas fa-check-circle text-success"></i>
                  : <i className="fas fa-times-circle text-danger"></i>
            }
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Database Server
            {
              this.props.data.database 
                  ? <i className="fas fa-check-circle text-success"></i>
                  : <i className="fas fa-times-circle text-danger"></i>
            }
          </li>
        </ul>
        <br />
      </Fragment>
    );
  }
}