import React from "react";

export const List = ({ users }) => {
  return (
    <ul>
      {users.map(({ name, id, email = null }) => {
        return (
          <li key={id}>
            {name} {email}
          </li>
        );
      })}
    </ul>
  );
};
