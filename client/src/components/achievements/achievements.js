import React, { Component } from "react";
import "./achievements.scss";
import day from "../../icons/1.svg";
export class Achievements extends Component {
  constructor(props) {
    super(props);
    const milestones = [
      "day",
      "month",
      "Two months",
      "Three months",
      "Four months",
      "Five months",
      "Six months",
      "Seven months",
      "Eight months",
      "Nine months",
      "Ten months",
      "Eleven months",
      "Year"
    ];
    console.log(this.props.soberDays);
    this.state = {
      soberDays: this.props.soberDays,
      currmilestones: this.getMilestones(this.props.soberDays)
    };
  }

  getMilestones = days => {
    return [
      this.state.soberDays >= 1,
      this.state.soberDays >= 30,
      this.state.soberDays >= 60,
      this.state.soberDays >= 90,
      this.state.soberDays >= 120,
      this.state.soberDays >= 150,
      this.state.soberDays >= 180,
      this.state.soberDays >= 210,
      this.state.soberDays >= 240,
      this.state.soberDays >= 270,
      this.state.soberDays >= 300,
      this.state.soberDays >= 330,
      this.state.soberDays >= 360
    ];
  };

  render() {
    return (
      <div className="achievements-container">
        <div className="box">
          <div id="progressbar"></div>
          <p style={{ textAlign: "center" }}>
            Progress to next mile stone {this.state.currmilestones}
          </p>
          <div id="token-holder">
            <h1>Tokens:</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Achievements;
