import React, { Fragment } from 'react';
import { NavLink }  from 'react-router-dom';
import FetchContainer from '../../Containers/FetchContainer';
import Loading from '../Common/Loading';
import Card from './Card';

export default class Characters extends React.Component {

  render() {
    return (
      <Fragment>

        <NavLink to="/account">Back to Account</NavLink>
        <br />
        <br />

        <FetchContainer 
          url="https://www.mocky.io/v2/5b3ffdf5340000cb10001cd7"
          render={ ({ isLoading, data, error }) => (
            isLoading 
              ? <Loading /> 
              : data &&
                <Fragment>
                  {
                    data.map(function(char, index) {
                      return <Card key={index} {...char} />
                    })
                  }
                </Fragment>
          )}
        />
        
      </Fragment>
    );
  }
}
