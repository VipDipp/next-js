import React, { ChangeEventHandler, FC } from 'react';

interface InputProps {
    type: string,
    classStyle?: string,
    placeholder?: string,
    required?: boolean,
    onChange?: ChangeEventHandler
}

const TextInput: FC<InputProps> = 
({
    type,
    classStyle,
    placeholder,
    required,
    onChange
}) => {
    return (
        <input 
            className={classStyle}
            placeholder={placeholder}
            type={type}
            required={required}
            onChange={onChange}
        />
    );
};

export default TextInput;