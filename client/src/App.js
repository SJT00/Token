import React from "react";
import logo from "./icons/forbidden.svg";
import "./App.css";
import Form from "./components/form/form";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      />
      <header className="App-header">
        <h1>Alcoholics Nononymous</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form />
    </div>
  );
}

export default App;
