/* eslint-disable prettier/prettier */
import * as React from 'react';
import { checkboxProps } from './checkbox.props';
import * as styles from './checkbox.scss';

const Checkbox: React.FC<checkboxProps> = ({checked, label, onChange}) => (
  <label>
    <input className={styles.checkbox} type='checkbox' onChange={onChange} checked={checked}/>
    {label}
  </label>
);

export { Checkbox };
