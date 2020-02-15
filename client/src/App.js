import React from "react";
import { Component } from "react";

import logo from "./icons/forbidden.svg";
import "./App.css";
import Form from "./components/form/form";

export class App extends Component {
  constructor(props) {
    super(props);
  }

  callAPI() {
    fetch("http://localhost:9000/sendText")
        .then(res => res.text());
  }

  render() {
    return (
      <div className="App">
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <header className="App-header">
          <h1>Alcoholics Nononymous</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.callAPI}>
            Press to send text
          </button>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
