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
                        <p>{task.des}</p>
                        <p>{task.dateFinish}</p>
                        <p>{task.dateCreate}</p>
                        <p>{task.title}</p>
                        <p>{task.datePut}</p>
                        <p>{task.priority}</p>
                        <p>{task.status}</p>
                        <p>{task.creator}</p>
                    </div>
                ))}
            </div>
            :
            <h1 className='tasklist_nothing'>Задач нет</h1>
        }
    </div>
  );
}
