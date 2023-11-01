import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import LeftMenu from "./Components/Left-menu/LeftMenu";
import Categories from "./Components/Categories/Categories";
import Job from "./Components/Job/Job";
import { Route, Routes } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="body-container">
        <LeftMenu />
        <Categories />
        <Job />
      
      </div>
    </>
  );
}

export default App;
