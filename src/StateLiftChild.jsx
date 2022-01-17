import React from "react";

export default class StateLiftChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined };
  }

  render() {
    return (
      <div>
        <a href="/">Goback</a>
        <input value={this.props.text} onChange={this.handleTextChnage}/>
      </div>
    );
  }
  handleTextChnage = (e)=>{
    this.props.handleTextChange(e.target.value)
  }

}
