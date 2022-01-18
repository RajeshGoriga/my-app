import React from "react";
import "./App.css";
import Sample from "./Sample";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StateLiftParent from "./StateLiftParent";
import StyledComponent from "./HooksExample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewComp />}></Route>
        <Route path="/sample" element={<Sample />} />
        <Route path="/statechange" element={<StateLiftParent />} />
        <Route path="/hooks" element={<StyledComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

function NewComp() {
  return (
    <div>
      <h1>Hello this is new component</h1>
      <ul>
      <li><a href="/sample"> This is sample</a></li>
      <li><a href="/statechange" >State change</a></li>
      <li><a href="/hooks" >Hooks Example</a></li>
      </ul>
    </div>
  );
}

export default App;
