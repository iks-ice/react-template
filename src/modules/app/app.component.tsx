/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { AppProps } from './app.props';
import * as styles from './app.scss';
import { register } from '@core';
import { Form, TextField, Checkbox, SubmitButton } from '@core/components';
import { Switch, Route } from 'react-router-dom';

const Auth = register('auth', () => import('@auth'));
const Profile = register('profile', () => import('@profile'));

const initialForm = {
  userName: '',
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  company: ''
};
const initialErrors = {
  Username: '',
  Email: '',
  Password: ''
};

const App: React.FC<AppProps> = () => {
  const [form, setForm] = useState(initialForm);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [errors, setErrors] = useState(initialErrors)

  const setValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });

  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {userName, email, company, firstName, lastName, password} = form;
    const errors = [];
    if(!userName) {
      errors.push('Username');
    }
    if(!email) {
      errors.push('Email');
    }
    if(!password) {
      errors.push('Password');
    }

    if(errors.length > 0) {
      const errorsToState = errors.reduce((acc, err) => ({
          ...acc,
          [err]: `${err} is required`
        }), {});
        setErrors(errorsToState);
    } else {
      console.log('form submitted')
      setErrors(initialErrors);
    }
    
  }
  const onCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDisabled(!event.target.checked)
  }
  return (
    <div className={styles.app}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/profile' component={Profile} />
          <Form onSubmit={onSubmit}>
            <TextField error={errors.Username} name='userName' title='Username' value={form.userName} setValue={setValue} />
            <TextField error={errors.Email} name='email' title='Email' value={form.email} setValue={setValue} />
            <TextField error={errors.Password} name='password' title='Password' value={form.password} setValue={setValue} />
            <TextField name='firstName' title='First name (optional)' value={form.firstName} setValue={setValue} />
            <TextField name='lastName' title='Last name (optional)' value={form.lastName} setValue={setValue} />
            <TextField name='company' title='Company (optional)' value={form.company} setValue={setValue} />
            <Checkbox label='I agree to Terms & Conditions' onChange={onCheck}/>
            <SubmitButton disabled={isDisabled} title='save'/>
          </Form>
        </Switch>
      </React.Suspense>
    </div>
  );
}

export { App };
