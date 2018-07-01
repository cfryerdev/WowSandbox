import React, { Fragment, Component } from 'react';

export default class RealmsList extends Component {
  
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <Fragment>
        <ul class="list-group squared">
          <li class="list-group-item header d-flex justify-content-between align-items-center">
            Server Status
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Auth Server
            {
              this.props.data.auth 
                  ? <i class="fas fa-check-circle text-success"></i>
                  : <i class="fas fa-times-circle text-danger"></i>
            }
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            World Server
            {
              this.props.data.world 
                  ? <i class="fas fa-check-circle text-success"></i>
                  : <i class="fas fa-times-circle text-danger"></i>
            }
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Database Server
            {
              this.props.data.database 
                  ? <i class="fas fa-check-circle text-success"></i>
                  : <i class="fas fa-times-circle text-danger"></i>
            }
          </li>
        </ul>
        <br />
      </Fragment>
    );
  }
}