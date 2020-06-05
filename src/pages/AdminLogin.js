import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://api.devcamp.space/client_token";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const params = {
      auth: {
        email: email,
        password: password,
      },
    };

    axios
      .post(API_URL, params)
      .then((response) => {
        if (response.data.jwt) {
          console.log("JWT", response.data.jwt);
        } else {
          setErrorText("There was an error logging you in, please try again");
        }
      })
      .catch((error) => {
        console.log("Errors", error);
        setErrorText("There was an error logging you in, please try again");
      });
  };

  return (
    <div>
      Admin login
      <div>{errorText}</div>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          type="email"
        />

        <input
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
          type="password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
