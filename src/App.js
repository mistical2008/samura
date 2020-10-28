import "./App.css";

import React from "react";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";


// Some comment
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;
