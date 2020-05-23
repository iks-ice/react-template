/* eslint-disable prettier/prettier */
import * as React from 'react';
import { FormProps } from './Form.props';
import * as styles from './Form.scss';

const Form: React.FC<FormProps> = ({onSubmit, children}) => (
  <form onSubmit={onSubmit}>
    {children}
  </form>
);

export { Form };
