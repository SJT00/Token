import React, { Component } from "react";
import { Route, Router, BrowserRouter, Switch } from "react-router-dom";
import history from "./history";
import "./App.css";
import Home from "./components/home/home";
import Dashboard from "./components/dashboard/dashboard";
import Settings from "./components/settings/settings";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </Router>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
