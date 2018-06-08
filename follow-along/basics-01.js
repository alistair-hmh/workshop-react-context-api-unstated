import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const { Provider, Consumer } = React.createContext();

class MyComponent extends React.Component {
  render() {
    return (
      <Consumer>
        {value => (
          <div>
            <h3>Hi! I'm a component.</h3>
            <div>Im pulling this value from my context provider: "{value}"</div>
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

  render() {
    return (
      <Provider value="abc">
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
