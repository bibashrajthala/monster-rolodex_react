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
      </div>
    );
  }
}

export default App;
