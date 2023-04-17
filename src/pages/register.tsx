import * as React from 'react';
import { RegForm } from '../components/registerForm/registerForm';

export interface IRegisterProps {
}

export function Register ({setAuth}: any) {
  return (
    <div>
        <RegForm setAuth={setAuth}/>
    </div>
  );
}
