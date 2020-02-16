import React, { Component } from "react";

import "./dashboard.scss";
import Radar from "radar-sdk-js";

const publishableKeyTest =
  "prj_test_pk_2193569a3505e0bfb9ceb29738241a65a1c1ef7c";
Radar.initialize(publishableKeyTest);

let userId = "saad";
Radar.setUserId(userId);
let description = "Saad Taj";
Radar.setDescription(description);

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      drinking: false,
      soberDays: 0,
      startDate: new Date("2020-01-01"),
      sobcalc: false
    };
  }

  debugSobriety = add => {
    console.log("pre change", this.state.startDate);
    if (add) {
      this.state.startDate = this.state.startDate.getDate - 1;
    } else {
      this.state.startDate = this.state.startDate.getDate + 1;
    }
    console.log("post change", this.state.startDate);
  };

  getSoberDays = startDate => {
    let today = new Date();
    let soberDays =
      (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
    return Math.round(soberDays) - 1;
  };

  componentWillMount = () => {
    if (!this.state.sobcalc) {
      this.state.soberDays = this.getSoberDays(this.state.startDate);
      this.props.getSoberDays(
        this.state.drinking,
        this.state.soberDays,
        this.state.startDate
      );
      this.state.sobcalc = true;
    }

    let quoteNumber = Math.floor(Math.random() * 1643);
    fetch("https://type.fit/api/quotes")
      .then(function(res) {
        return res.json();
      })
      .then(data => {
        this.setState({ quote: data[quoteNumber].text });
        if (data[quoteNumber].author === null) {
          this.setState({ author: "Unknown" });
        } else {
          this.setState({ author: data[quoteNumber].author });
        }
      });
  };

  trackUser = () => {
    let time = this.state.drinking ? 60000 : 10000;
    if (!this.state.drinking) {
      Radar.trackOnce(function(status, location, user, events) {
        if (status === Radar.STATUS.SUCCESS) {
          let _tag = user.geofences[0].tag;
          if (_tag === "liquorStore" || _tag === "pub" || _tag === "bar") {
            fetch("http://localhost:9000/sendText").then(() => null);
          }
        }
      });
      this.state.drinking = true;
      this.state.startDate =
        Math.round(new Date().getTime - this.state.startDate.getTime) /
        (1000 * 60 * 60 * 24);
      this.state.soberDays = 0;
      this.state.sobcalc = false;
      time = 60000;
      window.setTimeout(this.trackUser, time);
    } else {
      Radar.trackOnce(function(status, location, user, events) {
        if (status === Radar.STATUS.SUCCESS) {
          let _tag = user.geofences[0].tag;
          if (_tag === "liquorStore" || _tag === "pub" || _tag === "bar") {
            fetch("http://localhost:9000/sendText30Mins").then(() => null);
          } else {
            this.state.drinking = false;
            time = 10000;
            return;
            // fix this
          }
        }
      });
      this.state.drinking = true;
      this.state.startDate =
        Math.round(new Date().getTime - this.state.startDate.getTime) /
        (1000 * 60 * 60 * 24);
      this.state.soberDays = 0;
      this.state.sobcalc = false;
      time = 60000;
      window.setTimeout(this.trackUser, time);
    }
  };

  componentDidMount = () => {
    let time = 10000;
    window.setTimeout(this.trackUser, time);
  };

  render() {
    const { quote, author, soberDays } = this.state;
    return (
      <>
        <div id="map-container">
          <div id="map"></div>
        </div>
        <p
          style={{
            marginTop: "5px",
            marginLeft: "18vw",
            marginRight: "18vw",
            textAlign: "center",
            color: "white",
            marginBottom: "0px"
          }}
        >
          "{quote}"
        </p>
        <p
          style={{
            marginLeft: "18vw",
            marginRight: "18vw",
            textAlign: "center",
            color: "white",
            marginTop: "5px",
            marginBottom: "5px"
          }}
        >
          -<i>{author}</i>
        </p>
      </>
    );
  }
}

export default Dashboard;
