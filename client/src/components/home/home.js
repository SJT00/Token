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

  componentDidMount = () => {
    console.log(this.props);
  }
  
  render() {
    let { getLoggedIn } = this.props;
    return (
      <div className="home">
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <header className="header">
          <h1 className="title" style={{marginBottom: "0px", color: "#4775d1"}}>TOKEN</h1>
          <p style={{marginTop: "0px", color: "#adc2eb"}}><i>An app to help alcoholics achieve sobriety.</i></p>
          <img src={logo} className="logo" alt="logo" />
        </header>
        <p style={{color: "#adc2eb", marginBottom: "0px"}}><i>Please enter your credentials:</i></p>
        <Form getLoggedIn={getLoggedIn}/>
      </div>
    );
  }
}

export default Home;
