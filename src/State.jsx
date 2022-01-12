import React from "react";
import "./App.css";
export default class State extends React.Component {
    constructor() {
        super()
        this.state = {
            id: 1,
            name: "ramya"
        };
    }

    render() {
        return (
            <div>
                <p>{this.state.id}</p>
                <p>{this.state.name}</p>
            </div>
        );
    }
}