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

/*
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

  const [showEmail, setshowEmail] = useState(false);
  const toggleEmail = () => {
    setshowEmail(!showEmail);
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  const fetchUsers = async () => {
    const responseFetch = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersFromFetch = await responseFetch.json();
    setUsers(usersFromFetch);
  };

  const fetchAndToggleUsersList = async () => {
    await fetchUsers();
    toggleList();
    toggleEmail()
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

        <Button onClick={fetchAndToggleUsersList}>FETCH USERS</Button>

        <Button onClick={fetchAndToggleUsersList}>FETCH USERS EMAIL</Button>

        <Button onClick={handleTheme}>TOGGLE THEME</Button>

        {showList && showEmail && <List users={users} showName={true} showEmail={true} />}
      </div>
    </ThemeContext.Provider>
  );
};
*/

/*
/////////////////////////////////////////////////////////////////////

UŽDUOTIS

Iš esmės norit puslapio su:
* pavadinimu
* dviem mygtukais, vieną paspaudus fetchinam userius iš https://jsonplaceholder.typicode.com/users ir įdedam į apatinį listą (naudokit state useriams saugot), kitas pakeisti puslapio temai (stiliams) naudokit contextą (panašiai kaip https://github.com/vladasko-g/sda-react/tree/react-2-context )
* apačioj atsiranda listas su userneimais (jeigu jie pafetchinti)

/////////////////////////////////////////////////////////////////////
*/

// import React, { useState, useEffect, useContext } from "react";
// import "./App.css";

// import { Title } from "./Title";
// import { Button } from "./Button";
// import { List } from "./List";
// import { ThemeContext, Theme } from "./Theme";

// export const App = () => {
//   const [users, setUsers] = useState([]);
//   const [theme, setTheme] = useState(Theme.light);
//   const [showList, setShowList] = useState(false);

//   const fetchUsers = async () => {
//     const responseFetch = await fetch("https://jsonplaceholder.typicode.com/users");
//     const usersFromFetch = await responseFetch.json();
//     setUsers(usersFromFetch);
//   };

//   const toggleList = () => {
//     setShowList(!showList);
//   };

//   const fetchAndToggleUsersList = async () => {
//     await fetchUsers();
//     toggleList();
//   };

//   // useEffect(() => {
//   //   fetchUsers();
//   // }, []);

//   // const backgroundTheme = useContext(ThemeContext);

//   const handleTheme = () => {
//     setTheme((theme) => (theme === Theme.light ? Theme.dark : Theme.light));
//   };

//   return (
//     <ThemeContext.Provider value={theme}>
//       <div className="react-div" style={theme}>
//         <Title>React App (My Task)</Title>

//         <Button onClick={fetchAndToggleUsersList}>FETCH USERS</Button>

//         <Button onClick={fetchAndToggleUsersList}>FETCH USERS EMAIL</Button>

//         <Button onClick={handleTheme}>TOGGLE THEME</Button>

//         {showList && <List users={users} showName={true} showEmail={true} />}
//       </div>
//     </ThemeContext.Provider>
//   );
// };

///////////////////////////
// v Vlado

import React, { useState, useEffect, useContext } from "react";
import "./App.css";

import { Title } from "./Title";
import { Button } from "./Button";
import { List } from "./List";
import { ThemeContext, Theme } from "./Theme";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [listItems, setlistItems] = useState([]);
  const [theme, setTheme] = useState(Theme.light);
  const [showList, setShowList] = useState(true);

  // const fetchUsers = async () => {
  //   const responseFetch = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const usersFromFetch = await responseFetch.json();
  //   setUsers(usersFromFetch);
  // };

  const toggleList = () => {
    setShowList(!showList);
  };

  const showUsers = () => {
    const items = users.map((user) => {
      return {
        id: user.id,
        text: user.username,
      };
    });
    setlistItems(items);
    // toggleList();
  };

  const showUsersEmail = () => {
    const items = users.map((user) => {
      return {
        id: user.id,
        text: user.email,
      };
    });
    setlistItems(items);
    // toggleList();
  };

  useEffect(() => {
    (async () => {
      const responseFetch = await fetch("https://jsonplaceholder.typicode.com/users");
      const usersFromFetch = await responseFetch.json();
      setUsers(usersFromFetch);
    })();
  }, []);

  // const backgroundTheme = useContext(ThemeContext);

  const handleTheme = () => {
    setTheme((theme) => (theme === Theme.light ? Theme.dark : Theme.light));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="react-div">
        <Title>React App (My Task)</Title>

        <Button onClick={showUsers}>SHOW USERS</Button>

        <Button onClick={showUsersEmail}>SHOW USERS EMAIL</Button>

        <Button onClick={handleTheme}>TOGGLE THEME</Button>

        {showList && <List items={listItems} />}
      </div>
    </ThemeContext.Provider>
  );
};
