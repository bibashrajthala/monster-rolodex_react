import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
    // console.log("1-constructor");
  }

  componentDidMount() {
    // console.log("3-componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  render() {
    // console.log("2-render");
    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="Search Monster"
          onChange={(event) => {
            console.log(event.target.value);
            const searchString = event.target.value.toLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchString);
            });
            this.setState(() => {
              return { monsters: filteredMonsters };
            });
          }}
        />

        {this.state.monsters.map((monster, index) => {
          return <h1 key={index}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
