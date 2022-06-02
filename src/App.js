import React from "react";
import "./App.css";
import Header from "../src/screen/Header";
import Sidebar from "../src/screen/Sidebar";
import Feed from "./Feed";

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar/>
        <Feed/>
        {/*App body */}
        {/* feed*/}
        {/* Widget*/}
      </div>
    </div>
  );
}

export default App;