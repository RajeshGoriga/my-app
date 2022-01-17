import React from "react";
// import State from "./State";

// import Sample from "./Sample";
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
                <h2>Hello this is spandana created Table </h2>
                <table class="custdata" align='center' border='1px'>
                    <tr><th align='center'>id</th>
                    <th align='center'> title</th></tr>
                    {data &&
                        data.map((item) => (
                            <>
                                    
                                <tr><td>{item.id}</td>
                                <td>{item.title}</td></tr>
                                
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
