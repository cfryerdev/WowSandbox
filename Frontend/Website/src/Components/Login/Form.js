import React, { Component } from 'react';
import { NavLink }  from 'react-router-dom';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      model: {}
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <div class="form-group">
          <label>Account Name</label>
          <input className="form-control" placeholder="Enter account name" 
            value={this.state.model.accountName} onChange={this.handleChange} />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" 
            value={this.state.model.password} onChange={this.handleChange} />
        </div>

        <div class="form-group" style={{ marginTop: 40 }}>
          <NavLink to="/account" className="btn btn-primary">
            Sign In
          </NavLink>   
          <NavLink to="/forgotpassword" 
            style={{ marginLeft: 10 }} className="btn btn-secondary float-right">
            Forgot Password
            </NavLink>   
        </div>

      </form>
    );
  }
}