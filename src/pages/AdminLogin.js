import React, { useState } from "react";

export default () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      Admin login
      <h2>Email: {email}</h2>
      <form>
        <input
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          type="email"
        />
      </form>
    </div>
  );
};
