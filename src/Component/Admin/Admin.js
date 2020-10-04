import React from "react";
import logo from "../../logos/users-alt 1.png";
import plus from "../../logos/plus 1.png";
import Logo2 from "../../logos/Group 1329.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tabel from "./Tabel";
import AddEvent from "./AddEvent";
const routes = [
  {
    path: "/tabel",
    exact: true,
    sidebar: () => "",
    main: () => <Tabel />,
  },
  {
    path: "/addevent",
    sidebar: () => "",
    main: () => <AddEvent />,
  },
];
const Admin = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "30%",
            height: "100vh",
            background: "#FFFFFF",
          }}
        >
          <img src={Logo2} style={{ height: "40px" }} alt="" />
          <ul style={{ listStyleType: "none", padding: 0, marginTop: "40px" }}>
            <li>
              <Link to="/tabel">
                <img src={logo} style={{ height: "20px" }} alt="" /> Volunter
                register list
              </Link>
            </li>
            <br />
            <li>
              <Link to="/addevent">
                <img src={plus} style={{ height: "20px" }} alt="" /> Add event
              </Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Admin;
