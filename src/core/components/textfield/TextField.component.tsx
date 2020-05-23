/* eslint-disable prettier/prettier */
import React from 'react';
import { TextFieldProps } from './TextField.props';
import * as styles from './TextField.scss';

const TextField: React.FC<TextFieldProps> = ({title, name, value, setValue, error}) => (
  <div className={styles.wrap}>
    <label className={styles.label}>
      {title}
      <input name={name} type='text' className={styles.input} value={value} onChange={setValue} />
      {error && <p className={styles.error}>{error}</p>}
    </label>
  </div>
)

export { TextField };
