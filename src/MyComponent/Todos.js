import React from 'react';
import {TodoItem} from '../MyComponent/TodoItem';


export const Todos = (props) => {
    return (
        <div className="container">
            <h2 className="my-3">Todos list</h2>
            {props.todos.length===0? "No ToDos To Display":
            props.todos.map((todo)=>{
                return(
                <>
                <TodoItem todo={todo}  key={todo.sno}onDelete={props.onDelete}/>
                </>
                )
            })}

        </div>
    )
}
