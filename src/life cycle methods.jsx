import React from "react";
import ReactDom  from 'reacr-dom';
class Header extends React.Component {
    constructor (props){
        super(props);
        this.state ={favoritecolor:"red"};
    }
    static getDerivedStateFromProps (props,state){
        return {favoritecolor:props.favcol};
    }
    render(){
        return(
            <h1> My Favorite color is {this.state.favoritecolor}</h1>
        );
    }
}

ReactDom.render (<Header favcol ="yellow"/>,document.getElementById('root'));

