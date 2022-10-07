import React from "react";
import "./Item.css";

class Item extends React.Component{ 
    constructor(props){
        super(props)
        this.className = "todo__item";
        this.state = {done: this.props.done}
    }

    onItemClick =() =>{
        this.setState({done: !this.state.done});
    }
    
    render(){
        if(this.state.done){
            this.className += " todo__item--done"
        }else{
            this.className = "todo__item"
        }

        return(
            <li onClick={this.onItemClick} className={this.className}>{this.props.song} - {this.props.artistname}</li>
        )
    }
}

export default Item;