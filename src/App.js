/*
import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      My Task React
    </div>
  );
}

export default App;
*/

import React, { useState, useEffect, useContext } from "react";
import "./App.css";

import { Title } from "./Title";
import { Button } from "./Button";
import { List } from "./List";
import { ThemeContext, Theme } from "./Theme";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [theme, setTheme] = useState(Theme.light);
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  const fetchUsers = async () => {
    const responseFetch = await fetch("https://jsonplaceholder.typicode.com/users");

    const usersFromFetch = await responseFetch.json();
    console.log(users);
    console.log(usersFromFetch);

    setUsers(usersFromFetch);
  };

  const fetchAndToggleUserList = async () => {
    await fetchUsers();
    toggleList();
  };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const backgroundTheme = useContext(ThemeContext);

  const handleTheme = () => {
    console.log("TOGGLE THEME button click");

    setTheme((theme) => (theme === Theme.light ? Theme.dark : Theme.light));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="react-div" style={theme}>
        <Title>React App (My Task)</Title>

        <Button onClick={fetchAndToggleUserList}>FETCH USERS</Button>

        <Button onClick={fetchAndToggleUserList}>FETCH USERS EMAIL</Button>

        <Button onClick={handleTheme}>TOGGLE THEME</Button>

        {showList && <List users={users} showName={true} showEmail={true} />}
      </div>
    </ThemeContext.Provider>
  );
};
