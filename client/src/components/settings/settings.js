import React, { Component } from "react";
import "./settings.scss";
export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinking: this.props.drinking,
      soberDays: this.props.soberDays,
      startDate: this.props.startDate
    };
  }

  render() {
    return (
      <div className="settings-container">
        <div className="box">
          <div className="grid">
            <h1 style={{ gridColumn: "span 3 / auto", textAlign: "center" }}>
              Debug Panel
            </h1>
            <button onClick={() => (this.state.soberDays += 1)}>+</button>
            <p>Sobriety</p>
            <button onClick={null}>-</button>
            <button onClick={null}>Enter</button>
            <p>High-risk area</p>
            <button onClick={null}>Leave</button>
            <button
              style={{ gridColumn: "span 3 / auto", height: "7ex" }}
              onClick={null}
            >
              Trigger remaining in high-risk area
            </button>
            <h1 style={{ gridColumn: "span 3 / auto", textAlign: "center" }}>
              Values
            </h1>
            <p>{"Drinking: " + this.state.drinking}</p>
            <p>{"Days sober: " + this.state.soberDays}</p>
            <p>{"Sobriety start date: " + this.state.startDate}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
