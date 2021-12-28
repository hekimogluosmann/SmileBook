import "./App.css";
import React, { useState } from "react";
import Details from "./details";
import Book from './img/book.png';

const user = [
  {
    id: 1,
    name: "Ali",
    surname: "Hekimoglu",
    password: "12345",
  },
  {
    id: 2,
    name: "Aydin",
    surname: "Hekimoglu",
    password: "543212",
  },
];

function App() {
  const [message, setMessage] = useState("Login to SmileBook");
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function loginFunction() {
    if (user.some((user) => user.name === username)) {
      setUserNameError(false);
    } else {
      setUserNameError(true);
    }

    if (user.some((user) => user.password === password)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
    if (
      user.some((user) => user.name === username) &&
      user.some((user) => user.password === password)
    ) {
      alert("Hosgeldin");
    }
  }
  return (
    <>
      <img src={Book} className="logo" />
      <Details name={message} />
      <div className="wrapper">
        <div className="from-input-wrapper">
          <label>Username</label>
          <input
            type="text"
            className={"form-input " + (usernameError ? "error" : "")}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your username"
          />
        </div>
        <div className="from-input-wrapper">
          <label>Password</label>
          <input
            type="password"
            className={"form-input " + (passwordError ? "error" : "")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
          />
        </div>

        <button onClick={loginFunction}>Log in</button>
        <label> {usernameError ? "Kullanici Adi Yanlis" : ""} </label>
        <label> {passwordError ? "Kullanici Sifresi Yanlis" : ""} </label>
      </div>
    </>
  );
}

export default App;
