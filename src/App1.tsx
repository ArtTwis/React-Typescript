import React from "react";
import LoggedIn from "./components/states/LoggedIn";
import AuthUser from "./components/states/User";
import AuthUserTypeAssertion from "./components/states/UserTypeAssertion";
import Counter from "./components/states/Counter";

const App1 = () => {
  return (
    <div className="App">
      <LoggedIn />
      <AuthUser />
      <AuthUserTypeAssertion />
      <Counter />
    </div>
  );
};

export default App1;
