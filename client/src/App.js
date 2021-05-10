import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Prayers from "./pages/Prayers";
import prayerDetails from "./pages/prayerDetails";
import pageNotFound from "./pages/pageNotFound";
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
            <prayerDetails />
          </Route>
          <Route>
            <pageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
