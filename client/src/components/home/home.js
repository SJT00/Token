import React from "react";
import { Component } from "react";
import "./home.scss";
import { NavLink } from "react-router-dom";
import logo from "../../icons/forbidden.svg";
import Form from "../form/form";

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  callAPI() {
    fetch("http://localhost:9000/sendText").then(res => res.text());
  }

  render() {
    return (
      <div className="home">
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <header className="header">
          <h1 className="title">Alcoholics Nononymous</h1>
          <img src={logo} className="logo" alt="logo" />
          <button onClick={this.callAPI}>Press to send text</button>
        </header>
        <Form />
      </div>
    );
  }
}

export default Home;
