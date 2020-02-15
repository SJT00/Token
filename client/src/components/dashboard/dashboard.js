import React from "react";
import { Component } from "react";

import Radar from 'radar-sdk-js';

const publishableKeyTest = prj_test_pk_18a262454c6ea8c5d56b3e167aa959927f035d7e;
Radar.initialize(publishableKeyTest);

let userId = "saad";
Radar.setUserId(userId);

getSoberDays = (soberSince) => {
    var today = new Date();
    return soberDays = (today.getTime() - soberSince.getTime()) / (1000 * 3600 * 24);
}

var soberSince = new Date(2019, 00, 01);
let description = `Saad Jahazeb Taj (19) - Sober for ${getSoberDays(soberSince)} days.`;
Radar.setDescription(description);

export class Dashboard extends Component {
    constructor(props) {
        super(props);
      }
}