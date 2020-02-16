import React, { Component } from "react";
import "./achievements.scss";
export class Achievements extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="achievements-container">
        <div className="box">
          <div id="token-holder">
            <h1>Tokens:</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Achievements;
