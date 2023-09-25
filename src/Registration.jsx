import React from "react";
import { Form ,Button} from "react-bootstrap";
import "./App.css";
function Registration() {
  
  return (
    < div class="form-floating mb-3 mt-3">
        <Form  className="p-2 bg-sucess">
          <h5> <b>Registration-Form</b></h5>
          <label for ="name"><b>Name</b></label> 
          <input type="text"  class="form-control"placeholder="Enter Name" name ="name" id="name"/>
        <label for="email"><b>Email</b></label>
    <input type="text" class="form-control" placeholder="Enter Email" name="email" id="email" />
    <label for="pas"><b>Password</b></label>
    <input type="password" class ="form-control" placeholder="Enter Password" name="psw" id="pas"/>
    <label for="psw-repeat"><b>Conform Password</b></label>
    <input type="password" class="form-control" placeholder="Conform  Password" name="psw-repeat" id="psw-repeat" required/>
    <label for="digit"><b>Contact Number</b></label>
    <input type="digit" class="form-control"   placeholder="+91" name="digits" /><br/>
    <center><Button type="submit" class="registerbtn">Submit</Button></center>
  <div class="container signin"/>
    <p>Already have an account? <a href="login"> Sign in</a></p>
    </Form>
    </div>
  );
}
export default Registration;
