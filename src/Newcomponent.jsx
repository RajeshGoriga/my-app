import React from "react";
import Sample from "./Sample";
import "./App.css";
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
                <State />
                {data &&
                    data.map((item) => (
                        <>
                            <table style ="width=100%">
                                   <tr>
                                      <td> {item.title}</td>
                                     <td>{item.id}</td>    
                                   </tr>
                            </table>
                        </>
                    ))}
            </div>
        );
    }

    click = () => {
        this.setState({ name: "Name changed ok" });
        alert('Hello this is clicked')
    };
}
