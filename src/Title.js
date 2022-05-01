import React, { useState, useEffect, useContext } from "react";

import { ThemeContext, Theme } from "./Theme";

export const Title = (props) => {
  const backgroundTheme = useContext(ThemeContext);
  console.log(backgroundTheme);

  return <h1 style={{ backgroundColor: backgroundTheme.backgroundColor }}>{props.children}</h1>;
};
