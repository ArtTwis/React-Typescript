import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLogin: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <h3 style={{ margin: "10px" }}>
      {props.isLogin
        ? `Welcome ${props.name}! You have ${messageCount} unread messages.`
        : "Welcome Guest!"}
    </h3>
  );
};

export default Greet;
