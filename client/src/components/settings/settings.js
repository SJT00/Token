import React, { Component } from "react";
import "./settings.scss";
export class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="settings-container">
        <div className="box">
          <div className="grid">
            <button>Increase Sobriety</button>
            <button>Decrease Sobriety</button>
            <button>Leave high-risk area</button>
            <button>Enter high-risk area</button>
            <button>Trigger remaining in high-risk area</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
