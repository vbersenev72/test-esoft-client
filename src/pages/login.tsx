import * as React from 'react';
import { LoginForm } from '../components/loginForm/loginForm';

export interface ILoginProps {
}

export function Login (props: ILoginProps) {
  return (
    <div>
        <LoginForm/>
    </div>
  );
}
