import React, { Component } from "react";

const stateStructure = {
    isLoggedIn: false,
    user: {},
    errors: []
};

const AccountContext = React.createContext(stateStructure);

const AccountConsumer = AccountContext.Consumer;

const WS_BASE_URL = process.env.WS_BASE_URL || "http://localhost:3001";

class AccountProvider extends Component {
  constructor(state, props) {
    super(state, props);
    this.state = stateStructure;
  }

  /* ========================================================= */


  login = (username, password) => {
      fetch(`${WS_BASE_URL}/account/login`, {
        method: "POST",
        body: JSON.stringify({ username, password })
      })
      .then(response => { 
        return { status: response.status, data: response.json() };
       })
      .then(result => {
        if (result.status == 200) {
          this.setState({ isLoggedIn: true, user: result.data });
        }
      })
      .catch(error => {
        console.error(error);
        this.addError(error);
      });
  };

  logout = _ => {
    
  };

  clearErrors = _ => {
    this.setState({ errors: [] });
  };

  addError = msg => {
    var list = [...this.state.errors];
    list.push(msg);
    this.setState({ errors: list });
  };


  /* ========================================================= */

  render() {
    const { children } = this.props;
    return (
      <AccountContext.Provider
        value={{
          isLoggedIn: this.state.isLoggedIn,
          login: this.login,
          logout: this.logout,
          errors: this.state.errors
        }}
      >
        {children}
      </AccountContext.Provider>
    );
  }
}

export { AccountProvider, AccountConsumer };
