import React, { Component } from "react";
import Form from "./components/form/form";
import Header from "./components/header/header";
import "./App.scss";

/**
 * @class App
 * @retun App component
 */
class App extends Component {
  public render() {
    return (
      <>
        <Header></Header>
        <Form></Form>
      </>
    );
  }
}

export default App;
