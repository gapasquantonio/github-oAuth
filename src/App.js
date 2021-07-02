import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/user/:id">
            <User />
          </Route>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/" >
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
