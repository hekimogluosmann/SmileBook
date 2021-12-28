import "./App.css";
import React, { useState } from "react";
import Details from "./details";

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
    password: "54321",
  },
];

function App() {
  const [message, setMessage] = useState("Login");
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [surNameError, setSurnameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function loginFunction() {
    if (user.some((user) => user.name === username)) {
      setUserNameError(false);
    } else {
      setUserNameError(true);
    }

    if (user.some((user) => user.surname === surname)) {
      setSurnameError(false);
    } else {
      setSurnameError(true);
    }

    if (user.some((user) => user.password === password)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
    if (
      user.some((user) => user.name === username) &&
      user.some((user) => user.surname === surname) &&
      user.some((user) => user.password === password)
    ) {
      alert("Hosgeldin");
    }
  }
  return (
    <>
      <Details name={message} />
      <div className="wrapper">
        <input
          type="text"
          className={"form-input " + (userNameError ? "error" : "")}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Kullanici Adini Giriniz"
        />
        <input
          type="text"
          className={"form-input " + (surNameError ? "error" : "")}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Soyadinizi Giriniz"
        />
        <input
          type="password"
          className={"form-input " + (passwordError ? "error" : "")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Sifrenizi Giriniz"
        />
        <button onClick={loginFunction}>Giris yap</button>
        <label> {userNameError ? "Kullanici Adi Yanlis" : ""} </label>
        <label> {surNameError ? "Kullanici Soyadi Yanlis" : ""} </label>
        <label> {passwordError ? "Kullanici Sifresi Yanlis" : ""} </label>
      </div>
    </>
  );
}

export default App;
