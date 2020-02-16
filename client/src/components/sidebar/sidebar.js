import React, { Component } from "react";
import maps_icon from "../../icons/map.svg";
import awards_icon from "../../icons/trophy.svg";
import settings_icon from "../../icons/gear.svg";
import history from "../../history";
import "./sidebar.scss";

export class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="sidebar"
        style={
          history.location.pathname === "/"
            ? { visibility: "hidden" }
            : { visibility: "visible" }
        }
      >
        <ul>
          <li>
            <img src={maps_icon} onClick={() => history.push("/dashboard")} />
          </li>
          <li>
            <img
              src={awards_icon}
              style={{ borderRadius: "10%" }}
              onClick={() => history.push("/achievements")}
            />
          </li>
          <li>
            <img
              src={settings_icon}
              onClick={() => history.push("/settings")}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
