/* Create a To-Do List in Next.js
- add items to do the list
- delete items from the list
*/

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';


export default function Home() {
  //  creates state for the to-do list with default items like: learn next.js, learn react.js, learn copilot
  const [todoList, setTodoList] = useState([
    { id: uuidv4(), item: 'learn next.js' },
    { id: uuidv4(), item: 'learn react.js' },
    { id: uuidv4(), item: 'learn copilot' }
  ]);

  //  creates state for to do items
  const [todoItem, setTodoItem] = useState('');
  
  //  function that handels  adding items to the to-do list
  const addTodoItem = () => {
    if (todoItem) {
      setTodoList([...todoList, { id: uuidv4(), item: todoItem }]);
      setTodoItem('');
    }
  };

  //  function that handels deleting items from the to-do list
  const deleteTodoItem = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
    
  // render input field, button, and list of to-do items
  return (
    <div>
      <Head>
        <title>To-Do List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>To-Do List</h1>
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button onClick={addTodoItem}>Add</button>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              {todo.item}
              <button onClick={() => deleteTodoItem(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <Link href="/about">About</Link>
        <p>Contact me at: <!--email_off-->23f1002560@ds.study.iitm.ac.in<!--/email_off--></p>

      </footer>
    </div>
  );



}  
