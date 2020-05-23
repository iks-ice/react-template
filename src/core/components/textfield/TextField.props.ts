import React from 'react';
/* eslint-disable prettier/prettier */
type TextFieldProps = {
    title: string;
    name: string;
    value: any;
    error?: string;
    setValue: (event: React.ChangeEvent<HTMLInputElement>) => void
};

export { TextFieldProps };
