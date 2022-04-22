import React, { FC, useState } from 'react';

type objectProps = {
    value: number,
    label: string,
}

interface InputProps {
    classStyle?: string,
    required?: boolean,
    options: Array<objectProps>,
}


const RadioButton: FC<InputProps> = 
({
    classStyle,
    required,
    options,
}) => {
    return(
    <div>
        {options.map((a: objectProps) => (
        <label>
            <input 
            type="radio" 
            name="stuff" 
            className={classStyle} 
            />
            {a.label}
        </label>
        ))} 
    </div>
    )
};

export default RadioButton;