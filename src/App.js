import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Bibash", lastName: "Rajthala" },
      company: "ZTM",
    };
  }

  render() {
    return (
      <div className="App">
        <h1>
          hi i am {this.state.name.firstName} {this.state.name.lastName}
        </h1>
        <p>i work in {this.state.company}</p>
        <button
          onClick={() => {
            this.setState(
              () => {
                return {
                  name: { firstName: "Ram", lastName: "Katwal" },
                };
              },
              () => {
                console.log(this.state);
              }
            );
          }}
        >
          Change name
        </button>
      </div>
    );
  }
}

export default App;
