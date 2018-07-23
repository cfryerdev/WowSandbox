import React, { Component } from 'react';
import { withRouter, NavLink }  from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import FormsHandler from '../../Utilities/FormsHandler';
import config from '../../config.json';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      model: {
        username: "",
        password: ""
      }
    };
  }

  handleInputChange = (event) => {
		FormsHandler.handleChange(this, event);
	}

  handleSubmit = (event) => {
    event.preventDefault();

    axios.post(config.baseUrl + "account/login", this.state.model, { withCredentials: true })
      .then(res => {
        toast.success("Login successful.");
        this.props.history.push('/account');
      })
      .catch(function (err) {
        if (err.response && err.response.data) {
          toast.error(err.response.data.message);
        }
        console.error(err);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <div className="form-group">
          <label>Account Name</label>
          <input className="form-control" 
            placeholder="Enter account name" 
            name="username"
            value={this.state.model.username} 
            onChange={this.handleInputChange} />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" 
            placeholder="Enter password" 
            name="password"
            value={this.state.model.password} 
            onChange={this.handleInputChange} />
        </div>

        <div className="form-group" style={{ marginTop: 40 }}>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>   
          <NavLink to="/forgotpassword" className="btn btn-secondary float-right"
            style={{ marginLeft: 10 }} >
            Forgot Password
          </NavLink>   
        </div>

      </form>
    );
  }
}

export default withRouter(LoginForm);