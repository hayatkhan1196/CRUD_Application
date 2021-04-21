import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Adduser from "./components/user/Adduser";
import EditUser from "./components/user/EditUser";
import ViewUser from "./components/user/ViewUser";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/user/add" component={Adduser} />
          <Route exact path="/user/edit/:id" component={EditUser} />
          <Route exact path="/user/:id" component={ViewUser} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
