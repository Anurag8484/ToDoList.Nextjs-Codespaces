import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [todoList, setTodoList] = useState([
    { id: uuidv4(), item: 'learn next.js' },
    { id: uuidv4(), item: 'learn react.js' },
    { id: uuidv4(), item: 'learn copilot' }
  ]);

  const [todoItem, setTodoItem] = useState('');

  const addTodoItem = () => {
    if (todoItem) {
      setTodoList([...todoList, { id: uuidv4(), item: todoItem }]);
      setTodoItem('');
    }
  };

  const deleteTodoItem = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

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
      <p>
          Contact me at:{' '}
          <a href={`mailto:${'23f1002560'}@${'ds.study.iitm.ac.in'}`}>
            {`${'23f1002560'}@${'ds.study.iitm.ac.in'}`}
          </a>
      </p>
      </footer>

    </div>
  );
}
