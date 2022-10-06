import React from "react";
import "./Input.css";

class Input extends React.Component {
    constructor(props){
        super(props)
        this.state = {inputValue: ""}
    }

    update = (event) => {
        if(event.target.value === "Kris"){
            this.setState({inputValue: "Kris!!!"});
            return;
        }
        this.setState({inputValue: event.target.value},() => console.log(this.state.inputValue));
    }

    enter = (event) =>{
        if(event.keyCode === 13 && this.state.inputValue !== ""){
            console.log("enter gedruk");
            this.props.inputPressedEnter(this.state.inputValue);
        }

    }

    render(){
    return(
       <input onKeyUp={this.enter} onChange={this.update} value={this.state.inputValue} className="input" type="text" placeholder="boodschappen"/>
    );
    }
}


export default Input