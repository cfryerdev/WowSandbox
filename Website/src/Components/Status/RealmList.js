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
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ width: 40 }}>Status</th>
              <th >Realm</th>
              <th style={{ width: 80 }}>Type</th>
              <th style={{ width: 80 }}>Population</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.data.length === 0 ?
              <td colspan="4" className="text-center text-muted">No realms found or world server is unavailable.</td>
              : null
            }
            {
              this.props.data.map(function (realm, index) {
                return (
                  <tr key={index}>
                    <td className="text-center">
                      { 
                        realm.isOnline 
                        ? <i className="fas fa-check-circle text-success"></i>
                        : <i className="fas fa-times-circle text-danger"></i>
                      }
                    </td>
                    <td>
                      { 
                        realm.isOnline 
                        ? realm.name
                        : <span className="text-muted">{realm.name}</span>
                      }
                    </td>
                    <td >
                      { 
                        realm.isOnline 
                        ? realm.type
                        : <span className="text-muted">{realm.type}</span>
                      }
                    </td>
                    <td className="text-center">
                      { 
                        realm.isOnline 
                        ? realm.population
                        : <span className="text-muted">-</span>
                      }
                    </td>
                  </tr>
                );
              })
            }
            
          </tbody>
        </table> 
      </Fragment>
    );
  }
}