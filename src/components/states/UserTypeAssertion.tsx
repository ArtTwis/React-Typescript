import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const AuthUserTypeAssertion = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Twinkle",
      email: "twinkle@example.com",
    });
  };

  return (
    <div>
      <button className="btn" onClick={handleLogin}>
        Login
      </button>
      <div className="container-text">
        User name is{" "}
        <span className="special-text">{user.name}</span>
        <br />
        User email is{" "}
        <span className="special-text">{user.email}</span>
      </div>
    </div>
  );
};

export default AuthUserTypeAssertion;
