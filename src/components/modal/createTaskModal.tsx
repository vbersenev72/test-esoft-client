import * as React from 'react';
import './createTaskModal.css'
import axios from 'axios';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export interface ICreateTaskModalProps {
    createTaskModal: boolean
    setCreateTaskModal: any
}

export function CreateTaskModal ({createTaskModal, setCreateTaskModal}: ICreateTaskModalProps) {

    const [title, setTitle] = React.useState('')
    const [des, setDes] = React.useState('')
    const [holder, setHolder] = React.useState('')
    const [priority, setPriority] = React.useState('')
    const [dateFinish, setDateFinish] = React.useState<any>('')

    const [validForm, setValidForm] = React.useState<boolean>(false)


    const CreateTask = async () => {
        try {
            const response = await axios.post('http://localhost:5000/auth/create', {
                title, des, dateFinish, dateCreate: new Date(), datePut: new Date(), priority, status: 'Выполняется', token: localStorage.token, holder
            })
            alert('Задача успешно создана!')
            document.location.reload()
        } catch(e) {
            alert(e)
        }
    }





    React.useEffect(()=>{
        if ((title || des || holder || priority || dateFinish)) {
            setValidForm(true)
        } else {
            setValidForm(false)
        }
    }, [title, des, holder, priority, dateFinish, setValidForm])


  return (
    <div className={createTaskModal ? 'modal active' : 'modal' } onClick={() => setCreateTaskModal(false)}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
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
        </div>
    </div>
  );
}
