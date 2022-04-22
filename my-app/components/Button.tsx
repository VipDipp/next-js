import { FC, MouseEventHandler, ReactNode } from 'react';
import styles from '../styles/styles.module.css'

type ButtonTypes = "button" | "reset" | "submit" | undefined

interface InputProps {
    text: string,
    type: ButtonTypes,
    classStyle: string,
    onClick?: MouseEventHandler,
}

const SubmitButton: FC<InputProps> = 
({
    text,
    type,
    classStyle,
    onClick,
}) => {
    return (
        <button 
            type={type}
            className={classStyle}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default SubmitButton;