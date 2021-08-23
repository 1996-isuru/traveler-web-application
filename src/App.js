import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/auth/landing";
import TravelerHome from "./components/traveler/travelerHome";
import AdminHome from "./components/admin/adminHome";

function App() {

  const [token, setToken] = useState(false);
  const [localToken, setLocalToken] = useState(null);

  const getToken = () => {
    // console.log(token);
    // const localToken = null;
    const tokenn = localStorage.getItem("token");
    setLocalToken(tokenn);
    // console.log(localToken);
    if(localToken){
      setToken(true);
      // console.log(localToken);
      // console.log(token);
    }
  }

  useEffect(() => {
    getToken();
  });
  
  // console.log(localToken);
  
  return (
    <div className="App">
      <Router>
      {localToken ? (
        <>
        
        <Route exact path="/travelerhome" component={TravelerHome} />
        <Route exact path="/adminhome" component={AdminHome} />
        <Route path="/" exact component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
       
        </>
      ) : (
        <>
        <Route path="/" exact component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/travelerhome" component={TravelerHome} />
        <Route exact path="/adminhome" component={AdminHome} />
        
      </>
      )}
       </Router>
    </div>
  );
}

export default App;
