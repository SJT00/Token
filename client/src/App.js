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
      loggedIn: true,
      drinking: false,
      soberDays: 0,
      startDate: new Date("2020-01-01")
    };
  }

  getLoggedIn = loggedIn => {
    this.setState({ loggedIn: loggedIn });
  };

  getSobriety = (newdrinking, newsoberDays, newstartDate) => {
    this.state.drinking = newdrinking;
    this.state.soberDays = newsoberDays;
    this.state.startDate = newstartDate;
  };

  debugSobriety = () => {};

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
              <Route
                path="/dashboard"
                component={() => <Dashboard getSoberDays={this.getSobriety} />}
              />
              <Route
                path="/achievements"
                component={() => (
                  <Achievements soberDays={this.state.soberDays} />
                )}
              />
              <Route
                path="/settings"
                component={() => (
                  <Settings
                    soberDays={this.state.soberDays}
                    drinking={this.state.drinking}
                    startDate={this.state.startDate}
                  />
                )}
              />
            </Switch>
          </Router>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
