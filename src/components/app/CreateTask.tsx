import * as React from 'react';
import './styles/createtask.css'
import { CreateTaskModal } from '../modal/createTaskModal';

export interface ICreateTaskProps {
}

export function CreateTask (props: ICreateTaskProps) {

    const [createTaskModal, setCreateTaskModal] = React.useState(false)

    const modalHandler = () => {
        setCreateTaskModal(true)
    }

  return (
    <div className='createtask'>

        <div className='createtask_button' onClick={() => modalHandler()}><h3>Создать задачу</h3></div>

        <CreateTaskModal createTaskModal={createTaskModal} setCreateTaskModal={setCreateTaskModal}/>

    </div>
  );
}
