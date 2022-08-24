import { useState, useEffect, ChangeEvent } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";

import "./App.css";

// typescript Generics are used to define type of argument a function will recieve and we use Generics with <generic> syntax.
// eg. while fetching data using fetch(),axios, and using useState() etc we can use generics.
// while fetching data we can use T,S or R generics to say that this util function to fetch data will recieve eg T type of data , and then pass that T type after defining after we know what type of data is received from the place we fetch to the util function

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState(""); // by default it infers state of type string
  const [monsters, setMonsters] = useState<Monster[]>([]); // here it cant infer array of Monster object so, we need to define the type
  const [filteredMonsters, setFilteredMonsters] = useState(monsters); // since it uses initial state already typed in previous lines, it infers state of type Monster[]

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    // console.log("effect2");

    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  // or, instead of importing ChangeEvent from 'react' , we can import React from 'react and use type React.ChangeEvent<HTMLInputElement> that we get when we hover event directly
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="Search Monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
