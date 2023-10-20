import React from "react";

type PersonProps = {
  personName: {
    first: string;
    last: string;
  }
};

const Person = (props: PersonProps) => {
  return <h3 style={{ margin: "10px" }}>{props.personName.first} {props.personName.last}</h3>;
};

export default Person;
