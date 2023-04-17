import * as React from 'react';
import './registerForm.css'
import axios from 'axios'

export interface IRegFormProps {
}

export function RegForm ({setAuth}: any) {

  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')

  const [name, setName] = React.useState('')
  const [lastname, setLastname] = React.useState('')

  const [emailDirty, setEmailDirty] = React.useState(false)
  const [passDirty, setPassDirty] = React.useState(false)
  const [nameDirty, setNameDirty] = React.useState(false)
  const [lastNameDirty, setLastNameDirty] = React.useState(false)


  const [emailError, setEmailError] = React.useState('Email не может быть пустым')
  const [passError, setPassError] = React.useState('Пароль не может быть пустым')
  const [nameError, setNameError] = React.useState('Имя не может быть пустым')
  const [lastNameError, setLastNameError] = React.useState('Фамилия не может быть пустой')

  const [formValid, setFormValid] = React.useState<boolean>(false)



  const registration = async (e:any, name:String, lastname:String, username:String, password:String) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/auth/registration', {name, lastname, username, password})
      alert(response.data.message)
    } catch (e:any) {
      alert(e.response.data.message)
    }
  }

  const blueHandler = (e: any) => {
    switch (e.target.name) {

      case 'email':
        setEmailDirty(true)
        break

      case 'pass':
        setPassDirty(true)
        break

      case 'name':
        setNameDirty(true)
        break

      case 'lastname':
        setLastNameDirty(true)
        break

      default:
        break
    }
  }

  const emailHandler = (e:any) => {
    setEmail(e.target.value)
    setEmailDirty(false)

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Email некорректен')
    } else {
      setEmailError('')
    }
  }

  const passHandler = (e:any) => {
    setPass(e.target.value)
    setPassDirty(true)

    if (e.target.value.length < 6) {
      setPassError('Пароль не может быть короче 6 символов')
    } else if (!e.target.value) {
      setPassError('Пароль не должен быть пустым')
    } else {
      setPassError('')
    }
  }

  const nameHandler = (e:any) => {
    setName(e.target.value)
    setNameDirty(true)

    if (!e.target.value) {
      setNameError('Имя не должно быть пустым')
    } else {
      setNameError('')
    }
  }


  const lastNameHandler = (e:any) => {
    setLastname(e.target.value)
    setLastNameDirty(true)

    if (!e.target.value) {
      setLastNameError('Фамилия не должна быть пустой')
    } else {
      setLastNameError('')
    }
  }

  React.useEffect(() => {
    if (emailError || passError || nameError || lastNameError) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
    if (localStorage.token) {
      setAuth(true)
    }

  }, [emailError, passError, nameError, lastNameError, setAuth])


  return (
    <form>
      <div className="login">
        <h1 className='join'>Регистрация</h1>

        <input style={{margin: '4px', height: '30px', borderRadius: '10px', width: "250px"}} onBlur={(e)=>blueHandler(e)} name='email' type='text' value={email} placeholder='Email' onChange={e => emailHandler(e)}/>
        {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}

        <input style={{margin: '4px', height: '30px', borderRadius: '10px', width: "250px"}} onBlur={(e)=>blueHandler(e)} name='pass' type='password' value={pass} placeholder='Password' onChange={e => passHandler(e)}/>
        {(passDirty && passError) && <div style={{color: 'red'}}>{passError}</div>}

        <input name='name' type="text" value={name} onChange={(e) => nameHandler(e)} placeholder='Name' onBlur={e => blueHandler(e)} style={{margin: '4px', height: '30px', borderRadius: '10px', width: "250px"}} />
        {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}

        <input name='lastname' type="text" value={lastname} onChange={(e) => lastNameHandler(e)} placeholder='Lastname' onBlur={e => blueHandler(e)} style={{margin: '4px', height: '30px', borderRadius: '10px', width: "250px"}}/>
        {(lastNameDirty && lastNameError) && <div style={{color: 'red'}}>{lastNameError}</div>}

        <button style={{padding: '4px', height: '30px'}} type='submit' disabled={formValid} onClick={(e) => registration(e, name, lastname, email, pass)}>Зарегистрироваться</button>

        <h3>Уже есть аккаунт? <a href="/login">Войдите</a></h3>
      </div>



    </form>
  );
}
