import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import List from "./List";
import Error from "./Error";
import Details from "./Details";

function App() {
  document.title = "Pokedex";

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/pokemon/:name" children={<Details />}></Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
