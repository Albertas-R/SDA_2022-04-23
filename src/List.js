// export const List = ({ users }) => {
//   return (
//     <ul>
//       {users.map(({ name, id, email = null }) => {
//         return (
//           <li key={id}>
//             {name} {email}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

import React from "react";

export const List = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, text }) => {
        return <li key={id}>{text}</li>;
      })}
    </ul>
  );
};

// export const UserNameList = ({ users }) => {
//   const items = users.map(({ id, username }) => {
//     return { id, text: username };
//   });

//   return <List items={items} />;
// };

// export const UserEmailList = ({ users }) => {
//   const items = users.map(({ id, email }) => {
//     return { id, email };
//   });

//   return <List items={items} />;
// };
