import {useState} from 'react'
import App from '../components/App'
import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { NotFound } from '../pages/notfound';


export interface IAppRouterProps {
}

export function AppRouter (props: IAppRouterProps) {


    const [auth, setAuth] = useState<boolean>(false)

  return (
    auth
     ?
    <Routes>
        <Route element={<App/>} path='/'/>
        <Route element={<NotFound/>} path='*'/>
    </Routes>
    :
    <Routes>
        <Route element={<Login setAuth={setAuth}/>} path='/login'/>
        <Route element={<Register/>} path='/'/> {/*регистрация если юзер не авторизован*/}
        <Route element={<NotFound/>} path='*'/>
    </Routes>

  );
}
