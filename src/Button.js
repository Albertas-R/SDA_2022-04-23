import React from "react";

// export const Button = (props) => {
//   return <button onClick={props.onClick}>{props.children}</button>;
// };

export const Button = (props) => {
  return <button {...props}>{props.children}</button>;
};
