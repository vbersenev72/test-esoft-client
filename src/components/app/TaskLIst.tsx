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

    const deleteTask = async (_id:any) => {
        const newTaskList = [...tasks].filter((task)=> task._id !== _id)
        setTasks(newTaskList)

        const response = await axios.post('http://localhost:5000/auth/delete', {_id}) // дописать фукнцию для удаления задачи (в апи тоже)
        document.location.reload()
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
                        <div>Создатель : {task.creator}</div>
                        <button onClick={() => deleteTask(task._id)}>Удалить задачу</button>
                    </div>
                ))}
            </div>
            :
            <h1 className='tasklist_nothing'>Задач нет</h1>
        }
    </div>
  );
}
