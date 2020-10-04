import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Donation from "./Component/Register/Donation/Donation";
import Event from "./Component/Event/Event";
import NavBar from "./Component/ComnComponent/Navbar/NavBar";
import Notfound from "./Component/Notfoun/Notfound";
import { Container } from "react-bootstrap";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Login from "./Component/Login/login";
import Register from "./Component/Register/Register";
import Admin from "./Component/Admin/Admin";
export const UserContext = createContext();
export const CategoryContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [category, setCategory] = useState({});
  return (
    <Container className="App-area">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <CategoryContext.Provider value={[category, setCategory]}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <PrivateRoute path="/register">
                <Register />
              </PrivateRoute>
              <Route path="/login" component={Login}>
                <Login />
              </Route>
              <Route path="/donation">
                <Donation />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
              <PrivateRoute path="/event">
                <Event />
              </PrivateRoute>
              <Route path="*">
                <Notfound></Notfound>
              </Route>
            </Switch>
          </Router>
        </CategoryContext.Provider>
      </UserContext.Provider>
    </Container>
  );
}

export default App;
