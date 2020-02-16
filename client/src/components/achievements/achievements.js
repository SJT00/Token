import React, { Component } from "react";
import "./achievements.scss";
import day from "../../icons/1.svg";
import two_months from "../../icons/2.svg";
import three_months from "../../icons/3.svg";
import four_months from "../../icons/4.svg";
import five_months from "../../icons/5.svg";
import six_months from "../../icons/6.svg";
import seven_months from "../../icons/7.svg";
import eight_months from "../../icons/8.svg";
import nine_months from "../../icons/9.svg";
import ten_months from "../../icons/10.svg";
import eleven_months from "../../icons/11.svg";
import year from "../../icons/12.svg";
export class Achievements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soberDays: this.props.soberDays,
      currmilestones: this.getMilestones(this.props.soberDays)
    };
  }

  getMilestones = days => {
    return [
      days >= 1 ? 1 : 0,
      days >= 30 ? 1 : 0,
      days >= 60 ? 1 : 0,
      days >= 90 ? 1 : 0,
      days >= 120 ? 1 : 0,
      days >= 150 ? 1 : 0,
      days >= 180 ? 1 : 0,
      days >= 210 ? 1 : 0,
      days >= 240 ? 1 : 0,
      days >= 270 ? 1 : 0,
      days >= 300 ? 1 : 0,
      days >= 330 ? 1 : 0,
      days >= 360 ? 1 : 0
    ];
  };

  render() {
    const milestones = [
      "Day",
      "Month",
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
    const currmile_i = this.state.currmilestones.findIndex((e) => e === 0);
    return (

      <div className="achievements-container">
        <div className="box">
          <div id="progressbar"></div>
          <p style={{ textAlign: "center" }}>
            Progress to next milestone of {currmile_i <= 1 ? "a" : ""} {milestones[currmile_i]}
          </p>

          <div id="token-holder">
            <p>Your tokens (so far):</p>
            <span style= {currmile_i >0 ? {visibility:"visible"}:{visibility:"hidden"}}>
              <img src={day} />
              <p>First Day!</p>
            </span>
            <span style= {currmile_i >1 ? {visibility:"visible"}:{visibility:"hidden"}}>
              <img src={day} />
              <p>First Month!</p></span>
            <span style= {currmile_i >2 ? {visibility:"visible"}:{visibility:"hidden"}}>
              <img src={two_months} />
              <p>Two Months!</p></span>
            <span style= {currmile_i >3 ? {visibility:"visible"}:{visibility:"hidden"}}> 
              <img src={three_months} />
              <p>Three Months!</p></span>
            <span style= {currmile_i >4 ? {visibility:"visible"}:{visibility:"hidden"}}>
              <img src={four_months} />
              <p>Four Months!</p></span>
              <span style= {currmile_i >5 ? {visibility:"visible"}:{visibility:"hidden"}}>
            <img src={five_months} />
            <p>Five Months!</p></span>
            <span style= {currmile_i >6 ? {visibility:"visible"}:{visibility:"hidden"}}>
            <img src={six_months} />
            <p>Six Months!</p></span>
            <span style= {currmile_i >7 ? {visibility:"visible"}:{visibility:"hidden"}}>
            <img src={seven_months} />
            <p>Seven Months!</p></span>
            <span style= {currmile_i >8 ? {visibility:"visible"}:{visibility:"hidden"}}>
            <img src={eight_months} />
            <p>Eight Months!</p></span>
            <span style= {currmile_i >9 ? {visibility:"visible"}:{visibility:"hidden"}}>
            <img src={nine_months} />
            <p>Nine Months!</p></span>
            <span style= {currmile_i >10 ? {visibility:"visible"}:{visibility:"hidden"}}>
            <img src={ten_months} />
            <p>Ten Months!</p></span>
            <span style= {currmile_i >11 ? {visibility:"visible"}:{visibility:"hidden"}}>
            <img src={eleven_months} />
            <p>Eleven Months!</p></span>
            <span style= {currmile_i >12 ? {visibility:"visible"}:{visibility:"hidden"}}>
            <img src={year} />
            <p>A Year!</p></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Achievements;
