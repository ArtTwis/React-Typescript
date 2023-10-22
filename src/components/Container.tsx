import React from "react";

type ConatinerProps = {
    styles?: React.CSSProperties;
    containerText?: string
}

const Container = (props: ConatinerProps) => {
    const {containerText = ""} = props;
  return (
    <div style={props.styles}>
      {containerText}
    </div>
  );
};

export default Container;