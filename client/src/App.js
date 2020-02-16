import React, { Component } from "react";
import { Route, Router, BrowserRouter, Switch } from "react-router-dom";
import history from "./history";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home";
import Dashboard from "./components/dashboard/dashboard";
import Achievements from "./components/achievements/achievements";
import Settings from "./components/settings/settings";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    }
  }
  
  getLoggedIn = (loggedIn) => {
    this.setState({loggedIn: loggedIn});
  }

  render() {
    return (
      <div className="App">
        <Sidebar open={this.state.loggedIn} />
        <BrowserRouter>
          <Router history={history}>
            <Switch>
              <Route 
                exact 
                path="/" 
                component={() => <Home getLoggedIn={this.getLoggedIn} />}
                />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/achievements" component={Achievements} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </Router>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
