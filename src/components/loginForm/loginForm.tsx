import * as React from 'react';
import './loginForm.css'

export interface ILoginFormProps {
}

export function LoginForm (props: ILoginFormProps) {

  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')

  const [emailDirty, setEmailDirty] = React.useState(false)
  const [passDirty, setPassDirty] = React.useState(false)

  const [emailError, setEmailError] = React.useState('Email не может быть пустым')
  const [passError, setPassError] = React.useState('Пароль не может быть пустым')

  const [formValid, setFormValid] = React.useState(false)


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

  const blueHandler = (e: any) => {
    switch (e.target.name) {

      case 'email':
        setEmailDirty(true)
        break

      case 'pass':
        setPassDirty(true)
        break

      default:
        break
    }
  }

  React.useEffect(() => {
    if (emailError || passError) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }

  }, [emailError, passError])


  return (

      <form>
        <div className='login'>
          <h1 className='join'>Вход</h1>

          <input style={{margin: '4px', height: '30px', borderRadius: '10px', width: "250px"}} onBlur={(e) => blueHandler(e)} name='email' type='text' value={email} placeholder='Email' onChange={e => emailHandler(e)}/>
          {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}

          <input style={{margin: '4px', height: '30px', borderRadius: '10px', width: '250px'}} onBlur={(e) => blueHandler(e)} name='pass' type='password' value={pass} placeholder='Password' onChange={e => passHandler(e)}/>
          {(passDirty && passError) && <div style={{color: 'red'}}>{passError}</div>}

          <button style={{padding:'4px', height: '30px'}} type='submit' disabled={formValid}>Войти</button>

          <h3>Еще нет аккаунта? <a href="/">Регистрация</a></h3>
        </div>
      </form>
  )
}
