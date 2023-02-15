class App extends React.Component {
  // this.state
  state = {
    headline: "React Application",
  };

  render() {
    return (
      <div data-component="App">
        <h1>React Application</h1>
      </div>
    );
  }
}

/* -------------------------------------------------------------------------- */

const reactDomRoot = ReactDOM.createRoot(document.getElementById("root"));

reactDomRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
