import React from "react";
import StateLiftChild from "./StateLiftChild";

export default class  StateLiftParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <div>
        <StateLiftChild
          text={this.state.text}
          handleTextChange={this.handleTextChange}
        />
        OutPut: {this.state.text}
      </div>
    );
  }
  handleTextChange = (newText) => {
    this.setState({ text: newText });
  };
}
