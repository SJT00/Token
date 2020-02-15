import React from "react";
import { Component } from "react";

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
            author: ""
        };
    }

    componentWillMount = () => {
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

    trackUser = () => {
        Radar.trackOnce(function(status, location, user, events) {
            if (status === Radar.STATUS.SUCCESS) {
                let _tag = user.geofences[0].tag;
                if (_tag === "liquorStore" || _tag === "pub" || _tag === "bar"){
                    fetch("http://localhost:9000/sendText30Mins")
                        .then(() => null);
                    // use this fetch to call "May have entered dangerous area"
                    // fetch("http://localhost:9000/sendText") 
                }
            }    
        });
    }

    componentDidMount = () => {
        window.setInterval(this.trackUser, 10000);
    }

    render() {
        const { quote, author } = this.state;
        return (
        <>
            <div id="map"></div>
            <p style={{ marginLeft: "18vw", marginRight: "18vw", textAlign: "center", color: "white", marginBottom: "0px" }}>"{quote}"</p>
            <p style={{
                marginLeft: "18vw",
                marginRight: "18vw", 
                textAlign: "center", 
                color: "white", 
                marginTop: "5px" 
                }}>
                <i>{author}</i>
            </p>
        </>
        );
    }
}

export default Dashboard;
