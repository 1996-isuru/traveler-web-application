import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import NotFound from "./components/NotFound";
// import DashBoard from "./components/DashBoard";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/auth/landing";
import TravelerHome from "./components/traveler/travelerHome";
import AdminHome from "./components/admin/adminHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/travelerhome" component={TravelerHome} />
        <Route exact path="/adminhome" component={AdminHome} />
      </Router>
    </div>
  );
}

export default App;
