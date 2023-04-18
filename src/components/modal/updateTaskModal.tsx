import * as React from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';

export interface IUpdateTaskModalProps {
}

export function UpdateTaskModal ({ updateTaskModal, setUpdateTaskModal}:any ) {

    const getTaskById = async (_id: any) => {
        const task = await axios.post('http://localhost:5000/auth/gettask', {_id})
    }


    const updateTask = (id:any) => {

    }

    React.useEffect(() => {
        // updateTask()
    }, [])

  return (
    <div className={updateTaskModal ? 'modal active' : 'modal' } onClick={() => setUpdateTaskModal(false)}>
    {/* <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div>
            <input type="text" placeholder='Заголовок' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <br />
            <input type="text" placeholder='Описание задачи' value={des} onChange={(e) => setDes(e.target.value)}/>
            <br />
            <input type="text" placeholder='Ответственный' value={holder} onChange={(e) => setHolder(e.target.value)} />
            <br/>
            <DatePicker selected={dateFinish} onChange={(date) => setDateFinish(date)}/>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <p style={{marginLeft: '10px'}}>Приоритет выполнения :</p>
                    <select className='modal__content__priority' value={priority} onChange={(e) => setPriority(e.target.value)} name="" id="">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>

                <button className='modal__content__create' disabled={!validForm} onClick={() => CreateTask()}><h2>Создать</h2></button>
            </div>

        </div>
    </div> */}
</div>
  );
}
