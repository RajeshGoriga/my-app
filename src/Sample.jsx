import React from "react";
export default class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Rajesh", data: {} };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }));
  }
  render() {
    console.log("data", this.state.data);
    return (
      <div>
        <h2>Hello this is {this.state.name}</h2>
        <button onClick={this.click} color="red">
          click me
        </button>
        {this.props.val}
      </div>
    );
  }
  click = () => {
    this.setState({ name: "Name changed ok" });
  };
}
