import React from "react";
export default class Sample extends React.Component {
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
    console.log(data)
    return (
      <div>
        <h2>Hello this is Table</h2>
        
        <ul>
          {data &&
            data.map((item) => (
              <>
                <li>{item.title}</li>
                <li>{item.id}</li>
              </>
            ))}
        </ul>
      </div>
    );
  }

  click = () => {
    this.setState({ name: "Name changed ok" });
    alert('Hello this is clicked')
  };
}
