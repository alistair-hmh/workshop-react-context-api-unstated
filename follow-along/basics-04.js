import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const { Provider, Consumer } = React.createContext();

class MyComponent extends React.Component {
  render() {
    return (
      <Consumer>
        {appClass => (
          <div>
            <h3>Foo Component</h3>
            <div>
              This val is from my context provider: "{appClass.state.someValue}"
            </div>
            <button onClick={() => appClass.changeState()}>Change App State</button>
          </div>
        )}
      </Consumer>
    );
  }
}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  state = {
    lang: "en",
    theme: "light",
    loggedIn: false,
    someValue: "FOO! 😂😒💀😑😤😐👀😩🙄💯"
  };

  changeState() {
    this.setState({someValue: 'Bar... 🍻🍺🍷🍸🥃🍹💃😏🎶📍'})
  }

  render() {
    return (
      <Provider value={this}>
        <div style={styles}>
          <Hello name="CodeSandbox" />
          <h2>Start editing to see some magic {"\u2728"}</h2>
          <p>
            <MyComponent />
          </p>
          <MyComponent />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
