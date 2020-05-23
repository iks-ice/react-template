/* eslint-disable prettier/prettier */
import * as React from 'react';
import { ButtonProps } from './button.props';
import * as styles from './button.scss';

/**
 * Renders Button
 */
const active =  {
    background: '#0d39ff'
}
const disable = {
    cursor: 'not-allowed',
    background: 'grey'
}
const SubmitButton: React.FC<ButtonProps> = ({ title, disabled }) => (
    <button
    type='submit'
    className={styles.button}
    style={disabled ? disable : active}
    disabled={disabled}>
        {title.toLocaleUpperCase()}
    </button>
)

export { SubmitButton };
