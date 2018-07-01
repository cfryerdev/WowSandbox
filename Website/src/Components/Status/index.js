import React, { Fragment } from 'react';
import FetchContainer from '../../Containers/FetchContainer';
import ServerStatus from './ServerStatus';
import RealmList from './RealmList';
import Loading from '../Common/Loading';

export default class Timeline extends React.Component {
  
	constructor(props, state) {
		super(props, state);
		this.state = {
      userName: 'CFRYERDEV'
		};
	}
  
  render() {
    return (
      <Fragment>

        <h4 style={{ marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid #777' }}>
          Check the status of WunCraft
        </h4>

        <FetchContainer 
          url="https://www.mocky.io/v2/5b3843512e00000e0036c7f8"
          render={ ({ isLoading, data, error }) => (
            isLoading 
              ? <Loading /> 
              : data &&
                <Fragment>
                  <ServerStatus data={data.server} />
                  <RealmList data={data.realms} />
                </Fragment>
          )}
        />

      </Fragment>
    );
  }

}