import React, { Component } from "react";
import history from "../../history";
import "./form.scss";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loggedOn: false
    };
  }

  // Presses "Log In" button when user presses enter
  handleKeyPress = e => {
    let { username, password } = this.state;
    if (e.key === "Enter" && username && password) {
      this.handleButtonClick(e);
    }
  }

  handleButtonClick = e => {
    let { username, password } = this.state;

    if (username === "saad" && password === "taj") {
      this.setState({loggedOn: true});
      this.props.getLoggedIn(true);
      history.push("/dashboard");
    } else {
      this.setState({loggedOn: false});
    }
  }

  render() {
    let { username, password } = this.state;
    
    return (
      <div>
        <div id="grid">
          <input
            placeholder="Username"
            name="username"
            id="user"
            value={username}
            onChange={e => this.setState({username: e.target.value})}
            onKeyPress={this.handleKeyPress}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            id="pw"
            value={password}
            onChange={e => this.setState({password: e.target.value})}
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <div id="enterButton">
          <button
            id="enter"
            type="button"
            disabled={!username || !password}
            onClick={this.handleButtonClick}
          >
            Log In
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
