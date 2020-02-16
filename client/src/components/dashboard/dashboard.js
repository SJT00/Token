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
      soberDays: 0
    };
  }

  getSoberDays = startDate => {
    let today = new Date();
    let soberDays =
      (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
    return Math.round(soberDays) - 1;
  };

  componentWillMount = () => {
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
      time = 60000;
      window.setTimeout(this.trackUser, time);
    }
  };

  componentDidMount = () => {
    let startDate = new Date("2020-01-01");
    this.state.soberDays = this.getSoberDays(startDate);

    let time = 10000;
    window.setTimeout(this.trackUser, time);
  };

  render() {
    const { quote, author, soberDays } = this.state;
    {
      this.props.soberDays = soberDays;
    }
    return (
      <>
        <div id="map-container">
          <div id="map"></div>
        </div>
        <p
          style={{
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
            marginTop: "5px"
          }}
        >
          -<i>{author}</i>
        </p>
      </>
    );
  }
}

export default Dashboard;
