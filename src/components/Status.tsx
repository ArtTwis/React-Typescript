import React from "react";

enum Message {
  "loading" = "Loading....",
  "success" = "Data fetched successfully :-)",
  "error" = "Error while fetching",
}

type StatusProps = {
  status: string;
};

const Status = (props: StatusProps) => {
  const valueOfStatus =
    Object.values(Message)[Object.keys(Message).indexOf(props.status)];

  return (
    <div style={{ margin: "10px" }}>
      <label>
        <b>Status - </b>
        {valueOfStatus}
      </label>
    </div>
  );
};

export default Status;
