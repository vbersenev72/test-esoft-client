import * as React from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';
import './updateTaskModal.css'

export interface IUpdateTaskModalProps {
}

export function UpdateTaskModal ({ updateTaskModal, setUpdateTaskModal, _id}:any ) {

    const [title, setTitle] = React.useState('')
    const [des, setDes] = React.useState('')
    const [holder, setHolder] = React.useState('')
    const [priority, setPriority] = React.useState('')
    const [dateFinish, setDateFinish] = React.useState<any>('')

    const [taskData, setTaskData] = React.useState<any>()


    const updateTask = async () => {

        const response = await axios.post('http://localhost:5000/auth/update', {_id, title, des, holder, priority, dateFinish})
        alert('Задача успешно изменена')
        document.location.reload()

    }


    React.useEffect(() => {
        
    }, [])

  return (
    <div className={updateTaskModal ? 'modalupdate active' : 'modalupdate' } onClick={() => setUpdateTaskModal(false)}>
      <div className="modalupdate__content" onClick={(e) => e.stopPropagation()}>
       <div>
            <input type="text" placeholder='Введите новый заголовок' value={title} onChange={(e:any) => setTitle(e.target.value)}/>
            <br />
            <input type="text" placeholder='Введите новое описание' value={des} onChange={(e) => setDes(e.target.value)}/>
            <br />
            <input type="text" placeholder='Переназначить ответственного' value={holder} onChange={(e) => setHolder(e.target.value)} />
            <br/>
            <DatePicker selected={dateFinish} onChange={(date) => setDateFinish(date)}/>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>

                <div>
                    <p style={{marginLeft: '10px'}}>Приоритет выполнения :</p>
                    <select className='modalupdate__content__priority' value={priority} onChange={(e) => setPriority(e.target.value)} name="" id="">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>

                <button className='modalupdate__content__create' onClick={() => updateTask()}><h2>Сохранить</h2></button>
            </div>
        </div>
    </div>
</div>
  );
}
