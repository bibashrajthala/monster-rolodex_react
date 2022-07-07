import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Yihua",
    };
  }

  render() {
    return (
      <div className="App">
        <h1>hi {this.state.name}</h1>
        <button
          onClick={() => {
            // this.state.name = "Bibash";
            this.setState({ name: "Andrei" });
            console.log(this.state);
          }}
        >
          Change name
        </button>
      </div>
    );
  }
}

export default App;
