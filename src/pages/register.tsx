import * as React from 'react';
import { RegForm } from '../components/registerForm/registerForm';

export interface IRegisterProps {
}

export function Register (props: IRegisterProps) {
  return (
    <div>
        <RegForm/>
    </div>
  );
}
