import React from 'react'
import './styles/tasklist.css'
import axios from 'axios';


export interface ITaskListProps {
}

export function TaskList (props: ITaskListProps) {

    const [tasks, setTasks] = React.useState<any>()
    const token = localStorage.token

    const getTasks = async (url:string, token:any) => {
        const response = await axios.post(url, {token})
        setTasks(response.data)
    }

    const deleteTask = async (id) => {
        const newTaskList = [...tasks].filter((task)=> task._id !== id)
        setTasks(newTaskList)

        const response = await axios.post() // дописать фукнцию для удаления задачи (в апи тоже)

    }

    React.useEffect(() => {
        getTasks('http://localhost:5000/auth/tasksuser', token)

    }, [setTasks])


  return (
    <div className='tasklist'>
        {
            tasks ?
            <div>
                {tasks.map((task:any)=>(
                    <div className='task' key={task._id}>
                        <h2 style={{display: 'flex', justifyContent: 'center'}}>{task.title}</h2>
                        <div style={{}}>{task.des}</div>
                        <div>Дата окончания : {task.dateFinish}</div>
                        <div>Дата создания : {task.dateCreate}</div>
                        <div>Последнее обновление : {task.datePut}</div>
                        <div>Приоритет : {task.priority}</div>
                        <div>Статус : {task.status}</div>
                        <button onClick={()=> }>Удалить задачу</button>
                    </div>
                ))}
            </div>
            :
            <h1 className='tasklist_nothing'>Задач нет</h1>
        }
    </div>
  );
}
