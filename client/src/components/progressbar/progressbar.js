import React, { Component } from "react";
import "./progressbar.scss";

export class Progressbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log((this.props.percentage * 100).toString() + "%");
    return (
      <div id="progressbar">
        <div
          id="filler"
          style={{ width: (this.props.percentage * 100).toString() + "%" }}
        ></div>
      </div>
    );
  }
}

export default Progressbar;
