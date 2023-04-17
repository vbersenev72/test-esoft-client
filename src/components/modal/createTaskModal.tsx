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
    const [dateFinish, setDateFinish] = React.useState<any>(new Date())

    const [validForm, setValidForm] = React.useState<boolean>(false)

    const getUsers = async () => {
        const response = await axios.post('http://localhost:5000/auth/users')
        console.log(response.data);

    }

    const CreateTask = async () => {
        const response = await axios.post('http://localhost:5000/auth/')
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
                        <select className='modal__content__priority' onChange={(e) => setPriority(e.target.value)} name="" id="">
                            <option value="">High</option>
                            <option value="">Medium</option>
                            <option value="">Low</option>
                        </select>
                    </div>

                    <button className='modal__content__create' disabled={!validForm}><h2>Создать</h2></button>
                </div>



            </div>
        </div>
    </div>
  );
}
