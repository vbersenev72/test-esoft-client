import React from 'react';
import { Header } from './app/Header';
import { TaskList } from './app/TaskLIst';
import { CreateTask } from './app/CreateTask';


function App({setAuth}:any) {
  return (
    <div className="App">
      <Header setAuth={setAuth}/>
      <CreateTask/>
      <TaskList/>
    </div>
  );
}

export default App;
