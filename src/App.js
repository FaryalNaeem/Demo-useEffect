import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  let data = {title: "waiting for fetch"};
  const [todo,setTodo] = useState(data);
  const [isData,setData] = useState(false);
  useEffect(()=>{
    async function fetchData(){
      const response =await  fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log("response=",response);
      
      let data =await response.json();
      setTodo(data) 
    }
   fetchData();
  },[isData]);
    
  return (
    <div>
      hello fetch
      <span> Title:{todo.title}</span>
    </div>
  );
}

export default App;
