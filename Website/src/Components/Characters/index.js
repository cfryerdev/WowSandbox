import React, { Fragment } from 'react';
import { NavLink }  from 'react-router-dom';
import axios from 'axios';
import config from '../../config.json';
import Loading from '../Common/Loading';
import Card from './Card';

export default class Characters extends React.Component {

  constructor() {
    super();
    this.state = {
      models: [],
      isLoading: true
    };
  }
  
  componentDidMount() {
    axios.get(config.baseUrl + "character/", { withCredentials: true })
      .then(res => {
        this.setState({ isLoading: false, models: res.data });
      })
  }

  render() {
    return (
      <Fragment>

        <NavLink to="/account">Back to Account</NavLink>
        <br />
        <br />

        {
          this.state.isLoading 
            ? <Loading /> 
            : this.state.models &&
              <Fragment>
                {
                  this.state.models.map(function(char, index) {
                    return <Card key={index} {...char} />
                  })
                }
              </Fragment>
        }
        
      </Fragment>
    );
  }
}
