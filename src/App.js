import React from "react";
import "./App.css";
import Header from "../src/screen/Header";
import SideBar from "../src/screen/SideBar";

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Header />

      <div className="app__body">
        <SideBar />
        {/*App body */}
        {/*Sidebar*/}
        {/* feed*/}
        {/* Widget*/}
      </div>
    </div>
  );
}

export default App;
