import { useState, createContext, useContext } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();
function Newform() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/')
  };

  const handleChange = (event)=>{
    setUser(event.target.value)
  }
  const [user, setUser] = useState("Jesse Hall");
  return (
    <UserContext.Provider value={user}>
      <div className="wrapper">
        <h1>How About Them Apples</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Name</p>
              <input name="name" onChange={handleChange}/>
            </label>
          </fieldset>
          <Component1 user={user}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </UserContext.Provider>
  );
}

function Component1(props) {
  console.log(props)
  return (
    <>
      <h1>{`Hello ${props.user}!`}</h1>
      <Component2 user={props.user} />
    </>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default Newform;
