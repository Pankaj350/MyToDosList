import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import { Footer } from './MyComponent/Footer';
import { Todos } from './MyComponent/Todos';
import React, { useState } from 'react';
function App() {
 
  const onDelete=(todo)=>{
    console.log("I am Delete",todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      tittle: "Go to the market",
      desc: "YOu need to ogo to the market"
    },
    {
      sno: 2,
      tittle: "Go to the Movies",
      desc: "YOu need to ogo to the market"
    }, {
      sno: 3,
      tittle: "Go to the Mall",
      desc: "Y0u need to ogo to the market"
    },
  ]);
  return (
    <>
      <Header tittle="MyTodoList" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
