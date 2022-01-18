import React from "react";

export default class StateLiftChild extends React.Component {
constructor(props) {
    super(props);
    this.state = { data: undefined};
}
    
  render() {
    return (
      <div>
        <a href="/">Goback</a>
        <input value={this.props.text} onChange={this.handleTextChnage}/>
          <fieldset>
            <label>
              <p>Employee ID:</p>
              <input name="id" />
              <p>Name:</p>
              <input Name="name "/>
            </label>
          </fieldset>
          <button type="submit">Submit</button>
      
      </div>
    );
  }
  handleTextChnage = (e)=>{
    this.props.handleTextChange(e.target.value)
  }

}
