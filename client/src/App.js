import React from "react";
import { Component } from "react";
import "./App.css";
import Home from "./components/home/home";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
