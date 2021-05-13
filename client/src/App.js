import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Prayers from "./pages/Prayers";
import Details from "./pages/Details";
import PageNotFound from "./pages/PageNotFound";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/prayers"]}>
            <Prayers />
          </Route>
          <Route exact path="/prayers/:id">
            <Details />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
