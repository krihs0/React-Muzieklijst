import "./Todo.css";
import React from "react";
import tasksObject from "../../data/tasks";
import Item from "../Item/Item";
import Input from "../Input/Input";

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
        }
       
    }

    componentDidMount(){
         this.setState({
            tasks: tasksObject.tasks,
        })
    }

    componentDidUpdate(){
       
    }

    inputPressedEnter = (inputFromInputComponent) =>{
        let toBeAdded = [
            {
                name: inputFromInputComponent,
                done: false,
                id: this.state.tasks.length + 1,
            },
        ]
        let mergedArray = this.state.tasks.concat(toBeAdded);
        this.setState({
            tasks: mergedArray,
        })
    }

    render(){


        let items = this.state.tasks.map(task =>{
            return <Item done={task.done} name={task.name} key={task.id}></Item>
        })

        return(
            <article className="todo">
                <header className="todo__header">
                <h1 className="todo__heading">Things to do:</h1>
                </header>
                <ul className="todo__list">{items}</ul>
                <Input inputPressedEnter={this.inputPressedEnter}/>
            </article>
    )}
}

export default Todo;