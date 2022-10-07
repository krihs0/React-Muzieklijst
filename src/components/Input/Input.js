import React from "react";
import "./Input.css";

class Input extends React.Component {
    constructor(props){
        super(props)
        this.state = {songInputValue: "", artistInputValue: ""}
    }

    update = (event, type) => {

        if(type === "song"){
            this.setState({songInputValue: event.target.value},() => console.log(this.state.songInputValue));
        }else{
            this.setState({artistInputValue: event.target.value},() => console.log(this.state.artistInputValue));
        }

    }

    /*keycode 13 is the keycode of enter*/
    add = (event, add) =>{
        if((event.keyCode === 13 || add) && this.state.songInputValue !== "" && this.state.artistInputValue !== ""){
            console.log("enter gedruk");
            this.props.inputPressedEnter(this.state.songInputValue, this.state.artistInputValue);
        }

    }

    render(){
    return(
        <div className="wrapper">
            <input onKeyUp={this.add} onChange={(event) => this.update(event,"song")} value={this.state.songInputValue} className="input" type="text" placeholder="song"/>
            <input onKeyUp={this.add} onChange={(event) => this.update(event,"artist")} value={this.state.artistInputValue} className="input" type="text" placeholder="artist"/>
            <button onClick={(event) => this.add(event,true)} className="button">Add song</button>
        </div>
    );
    }
}


export default Input