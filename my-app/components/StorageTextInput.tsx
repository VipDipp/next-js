import React, { FC, useEffect, useState } from 'react';

interface InputProps {
    width?: string;
    height?: string;
    styleClass?: string;
    placeholderText?: string;
    variant: string
}

const StorageTextInput: FC<InputProps> = 
    ({
        width,
        height,
        variant,
        placeholderText,
        styleClass
    }) => {
        const [value, setValue] = useState(() => {
            if (typeof window !== "undefined") {
            const saved = localStorage.getItem(variant);
            const initialValue = JSON.parse(saved || '{}');
            return initialValue || ""; 
            }
        });
        useEffect(() => {
            if (typeof window !== "undefined") {
                localStorage.setItem(variant, JSON.stringify(value));
            }
        }, [value]);
        return (
            <input 
                required={true}
                minLength={variant == "password" ? 8 : 0}
                style={{width}} 
                type={variant} 
                className={styleClass} 
                placeholder={placeholderText}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    };

export default StorageTextInput;