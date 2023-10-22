import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const AuthUser = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Twinkle",
      email: "twinkle@example.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button className="btn" onClick={handleLogin}>
        Login
      </button>
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
      <div className="container-text">
        User name is{" "}
        <span className="special-text">{user ? user?.name : "---"}</span>
        <br />
        User email is{" "}
        <span className="special-text">{user ? user?.email : "---"}</span>
      </div>
    </div>
  );
};

export default AuthUser;
