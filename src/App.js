import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import NoMatch from "./Components/NoMatch/NoMatch";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ServiceOrder from "./Components/ServiceOrder/ServiceOrder";

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/order">
            <ServiceOrder></ServiceOrder>
          </PrivateRoute>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
