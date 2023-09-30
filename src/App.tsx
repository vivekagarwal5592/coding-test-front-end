import React from 'react';
import './App.css';
import Home from "./Components/Home/Home.component";
import {Route, Routes} from "react-router-dom";
import Criteria from "./Components/Criteria/Criteria.component";
import Variable from "./Components/Variable/Variable.component";
import Indicator from "./Components/Indicator/Indicator.component";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/criteria" element={<Criteria/>} />
        <Route path="/variable" element={<Variable/>} />
        <Route path="/indicator" element={<Indicator/>} />
      </Routes>
  );
}

export default App;
