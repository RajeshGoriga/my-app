import React from "react";
import "./App.css";
import Sample from './Sample'

function App() {
  return (
    <div className="App">
      Hello world
      <NewComp/>
    </div>
  );
}

function NewComp() {
  return (
    <div>
      <h1>Hello this is new component</h1>
      <Sample val={'Hello this is value'}/>
    </div>
  );
}



export default App;
