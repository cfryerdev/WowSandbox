import React, { Component } from "react";

const stateStructure = {
    isLoggedIn: false,
    user: {
      id: 0,
      gmlevel: 0,
      email: "Not Provided",
      username: "Not Provided",
      last_login: '',
      online: 0,
      isAuthenticated: false
    },
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

  componentDidMount() {
    this.tryGetSession();
  }

  /* ========================================================= */
  // {"id":1,"gmlevel":4,"email":"wowsandbox@gmail.com","username":"ADMINS","isAuthenticated":true}

  login = (username, password, successCallback) => {
    fetch(`${WS_BASE_URL}/account/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({ isLoggedIn: true, user: result }, () =>{
          this.setSession(result);
          successCallback();
        });
      })
      .catch(error => {
        console.error(error);
        this.addError(error);
      });
  };

  logout = _ => {
    
  };

  register = (email, accountName, password) => {
    fetch(`${WS_BASE_URL}/account/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, accountName, password })
    })
    .then(response => { 
      return { status: 
        response.status, data: response.json() };
     })
    .then(result => {
      if (result.status === 200) {
        return this.login(accountName, password);
      }
    })
    .catch(error => {
      console.error(error);
      this.addError(error);
      return false;
    });
  };

  clearErrors = _ => {
    this.setState({ errors: [] });
  };

  addError = msg => {
    var list = [...this.state.errors];
    list.push(msg);
    this.setState({ errors: list });
  };

  setSession = (user) => {
    var timestamp = new Date();
    var minutes = 5;
    timestamp.setTime(timestamp.getTime() + (minutes * 60 * 1000));
    sessionStorage.setItem('userSession', JSON.stringify({ expires: timestamp, user }));
  }

  tryGetSession = () => {
    var sessJson = sessionStorage.getItem('userSession');
    if (sessJson) {
      var sess = JSON.parse(sessJson);
      var now = new Date();
      var timestamp = new Date(sess.timestamp);
      if (now.getTime() > timestamp.getTime()) {
        sessionStorage.removeItem('userSession');
        this.setState({ isLoggedIn: false, user: {} });
      } else {
        this.setState({ isLoggedIn: true, user: sess.user });
      }
    }
  }


  /* ========================================================= */

  render() {
    const { children } = this.props;
    return (
      <AccountContext.Provider
        value={{
          isLoggedIn: this.state.isLoggedIn,
          user: this.state.user,
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
