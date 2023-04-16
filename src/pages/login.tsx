import * as React from 'react';
import { LoginForm } from '../components/loginForm/loginForm';

export interface ILoginProps {

}

export function Login ({setAuth}: any) {
  return (
        <LoginForm setAuth={setAuth}/>
  );
}
