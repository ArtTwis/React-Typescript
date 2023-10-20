import React from "react";

type UserListProps = {
  userList: Array<{
    first: string;
    last: string;
  }>;
};

const UserList = (props: UserListProps) => {
  return (
    <div>
      <ul>
        {props.userList.map((user, index) => <li key={index}>{user.first} {user.last}</li>)}
      </ul>
    </div>
  );
};

export default UserList;
