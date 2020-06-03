import React, { useState } from "react";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Email", email);
    console.log("Password", password);
  };

  return (
    <div>
      Admin login
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
