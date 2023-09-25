import {Form,Button} from 'react-bootstrap'
import React from "react";
import "./App.css";
function Login() {

  return (
    
    < div class="form-floating mb-3 mt-3">
      <Form >
       <center><h3>Login-Form</h3></center>
          <label for="e-mail">UserName</label>
            <input type="text" class="form-control" id="email" placeholder="Enter email" name="email"/><br/>
            <label for="password">Password</label>
            <input type="text" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/> <br/>
        <center>
        <Button type="submit">Login</Button>
        </center>
       <center> <a href ="registration" >Registration</a><br/>
       <a href ="Forgotpassword">Forgotpassword</a></center>
      </Form>
    </div>
  );
}
export default Login;

