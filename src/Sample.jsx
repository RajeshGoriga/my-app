import React from "react";
import State from "./State";
import HocExample from "./HocExample"
class SampleC extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: undefined };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }));
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <h2>Hello this is Table</h2>
        <a href="/">Goback</a>
        <State />
        <table>
          {data &&
            data.map((item) => (
              <>
                
                  <tr>{item.title}</tr>
                  <td>{item.id}</td>
              </>
            ))}
        </table>
      </div>
    );
  }

  click = () => {
    this.setState({ name: "Name changed ok" });
    alert('Hello this is clicked')
  };
}

const Sample=HocExample(SampleC)
export default Sample
