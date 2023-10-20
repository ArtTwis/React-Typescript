import React from "react";
type HeadingProps = {
  children: string;
};

const Heading = (props: HeadingProps) => {
  return <h3 style={{ margin: "10px" }}>{props.children}</h3>;
};

export default Heading;
