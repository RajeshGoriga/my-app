import React, { useState,useEffect  } from "react";
import HocExample from "./HocExample"

const HooksExample = () => {
  const [name, ChangeName] = useState("Rajesh");

  useEffect(()=>{
      ChangeName("Hello Every one")
  },[name])
  return (
    <div>
        <a href="/">Goback</a>
      <h1>Hello This is Hooks example</h1>
      <button onClick={changeName}>Change here</button>
      {name}
    </div>
  );
  function changeName() {
    ChangeName("Name Changed");
  }
};

const StyledComponent = HocExample(HooksExample)

export default StyledComponent;