import React, { useState } from "react";
import history from "../../history";
import "./form.scss";
const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedOn, setLoggedOn] = useState(false);
  // Presses "Log In" button when user presses enter
  const handleKeyPress = e => {
    if (e.key === "Enter" && username && password) {
      handleButtonClick(e);
    }
  };
  const handleButtonClick = e => {
    // TODO: needs backend work to see what to do with login request
    if (username === "saad" && password === "taj") {
      setLoggedOn(true);
      history.push("/dashboard");
    } else {
      setLoggedOn(false);
    }
  };
  return (
    <div>
      <div id="grid">
        <input
          placeholder="Username"
          name="username"
          id="user"
          value={username}
          onChange={e => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          id="pw"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div id="enterButton">
        <button
          id="enter"
          type="button"
          disabled={!username || !password}
          onClick={handleButtonClick}
        >
          Log In
        </button>
      </div>
    </div>
  );
};
export default Form;
