import "./Todo.css";
import React from "react";
import Item from "../Item/Item";
import Input from "../Input/Input";

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            songs: [],
        }
       
    }

    componentDidMount(){

    }

    componentDidUpdate(){
       
    }

    inputPressedEnter = (songInputFromInputComponent, artistInputFromInputComponent) =>{
        console.log(songInputFromInputComponent)
        console.log(artistInputFromInputComponent)

        let toBeAdded = [
            {
                songname: songInputFromInputComponent,
                done: false,
                id: this.state.songs.length + 1,
                artistname: artistInputFromInputComponent,
            },
        ]
        console.log(toBeAdded);

        let mergedArray = this.state.songs.concat(toBeAdded);
        this.setState({
            songs: mergedArray,
        })
        console.log(mergedArray);

        
    }

    render(){


        let items = this.state.songs.map(song =>{
            return <Item done={song.done} song={song.songname} artistname={song.artistname} key={song.id}></Item>
        })

        return(
            <article className="todo">
                <header className="todo__header">
                <h1 className="todo__heading">{this.props.title}</h1>
                </header>
                <ul className="todo__list">{items}</ul>
                <Input inputPressedEnter={this.inputPressedEnter}/>
            </article>
    )}
}

export default Todo;