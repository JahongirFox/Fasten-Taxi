import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FastenPage1 from './Containers/FastenPage1/Fasten1.jsx'
import FastenPage2 from "./Containers/FastenPage2/Fasten2.jsx";
import FastenPage3 from "./Containers/FastenPage3/Fasten3.jsx";
import FastenPage4 from "./Containers/FastenPage4/Fasten4.jsx";
import FastenPage5 from "./Containers/FastenPage5/Fasten5.jsx";
function App() {
  return (
    <div className="App">
        <FastenPage1/>
        <FastenPage2/>
        <FastenPage3/>
        <FastenPage4/>
        <FastenPage5/>
    </div>
  );
}

export default App;
