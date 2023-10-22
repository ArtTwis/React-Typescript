import React, { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button className="btn" onClick={handleLogin}>Login</button>
      <button className="btn" onClick={handleLogout}>Logout</button>
      <div className="container-text">User is {isLoggedIn ? "Logged In" : "Logged Out"}</div>
    </div>
  );
};

export default LoggedIn;
