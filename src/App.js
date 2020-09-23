import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Login from "./component/login.jsx";
import Logout from "./component/logout.jsx";
import Profile from "./component/profile";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="display">
        <Login />
        <Logout />
      </div>
      <Profile />
    </>
  );
}

export default App;
