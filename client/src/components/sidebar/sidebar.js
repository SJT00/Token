import React, { Component } from "react";
import maps_icon from "../../icons/map.svg";
import settings_icon from "../../icons/gear.svg";
import "./sidebar.scss";

export class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <img src={maps_icon} onClick="" />
          </li>
          <li>
            <img src={settings_icon} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
