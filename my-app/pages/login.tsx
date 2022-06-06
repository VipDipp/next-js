import React, { FC } from 'react';
import { useUserContext } from '../components/Context';
import loginStyles from '../styles/loginStyles.module.css';
import Button from '../components/Button';
import StorageTextInput from '../components/StorageTextInput';

const LoginPage:FC = () => {
    const { loggedIn, setLoggedIn } = useUserContext();
    
    return (
        <div>
            <form 
            className={loginStyles.form}
            onSubmit={() => {
                setLoggedIn(true);
                localStorage.setItem('loggedIn', JSON.stringify(true));
            }}
            > 
                <StorageTextInput 
                variant='email' 
                styleClass={loginStyles.text_input} 
                placeholderText='Your email'
                /> 
                <StorageTextInput 
                variant='password' 
                styleClass={loginStyles.text_input} 
                placeholderText='Your password' 
                />
                <Button 
                text="Sign In" 
                type="submit" 
                classStyle={loginStyles.submit}
                />
            </form>
        </div>
    );
};

export default LoginPage;