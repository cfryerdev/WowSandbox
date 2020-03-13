import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      isNameAlreadyInUse: false,
      isEmailAlreadyInUse: false,
      model: {}
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    console.log(this.state.model);
    // fetch('http://localhost:81/register', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state.model)
    // })
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(data) {

    // });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <div class="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" 
            value={this.state.model.email} onChange={this.handleChange} />
          { 
            this.state.isEmailAlreadyInUse &&
            <small className="form-text text-danger">Email address is already in use.</small>
          }
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group">
          <label>Account Name</label>
          <input className="form-control" placeholder="Enter account name"  
            value={this.state.model.accountName} onChange={this.handleChange} />
          { 
            this.state.isNameAlreadyInUse &&
            <small className="form-text text-danger">Account name is already in use.</small>
          }
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password"
            value={this.state.model.password} onChange={this.handleChange} />
        </div>

        <div class="form-group">
          <label>Confirm Password</label>
          <input type="password" className="form-control" placeholder="Confirm password"
            value={this.state.model.confirmPassword} onChange={this.handleChange} />
        </div>

        <div class="form-group" style={{ marginTop: 40 }}>
          <button type="submit" className="btn btn-primary">Register</button>   
        </div>

        <div class="alert alert-info">
          <strong>Reminder:</strong> Set your realmlist to 127.0.0.1<br />
          <strong>Location:</strong> [~\World of Warcraft\WTF\Config.wtf]
        </div>

      </form>
    );
  }
}