import React from "react";
import { Component } from "react";

import "./dashboard.scss";
import Radar from "radar-sdk-js";

const publishableKeyTest =
  "prj_test_pk_18a262454c6ea8c5d56b3e167aa959927f035d7e";
Radar.initialize(publishableKeyTest);

let userId = "saad";
Radar.setUserId(userId);

const getSoberDays = soberSince => {
  const today = new Date();
  return (today.getTime() - soberSince.getTime()) / (1000 * 3600 * 24);
};

const soberFrom = new Date("2019", "00", "01");
let description = `Saad Jahanzeb Taj (19) - Sober for ${getSoberDays(
  soberFrom
)} days.`;
Radar.setDescription(description);


export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            author: ""
        };
    }

    componentDidMount = () => {
        let quoteNumber = Math.floor(Math.random() * 1643);
        fetch("https://type.fit/api/quotes")
            .then(function(res) {
                return res.json();
            })
            .then((data) => {
                this.setState({ quote: data[quoteNumber].text });
                if (data[quoteNumber].author === null) {
                    this.setState({ author: "Unknown" });
                }
                else {
                    this.setState({ author: data[quoteNumber].author });
                }
            });
    }

    render() {
        const { quote, author } = this.state;
        return (
        <>
            <div id="map"></div>
            <p style={{ textAlign: "center", color: "white", marginBottom: "0px" }}>"{quote}"</p>
            <p style={{ textAlign: "center", color: "white", marginTop: "5px" }}>-<i>{author}</i></p>
        </>
        );
    }
}

export default Dashboard;
