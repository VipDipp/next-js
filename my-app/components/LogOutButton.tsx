import { useUserContext } from './Context';
import loginStyles from '../styles/loginStyles.module.css';

const LogOutButton = () => {
    const { loggedIn, setLoggedIn } = useUserContext();
    return (
        <button
            type="button"
            className={loginStyles.logout}
            onClick={() => {
                if (typeof window !== "undefined") {
                    localStorage.setItem("loggedIn", JSON.stringify(false));
                    localStorage.setItem("email", "{}");
                    localStorage.setItem("password", "{}");
                    setLoggedIn(false);
                }
                console.log(loggedIn)
            }}
        > 
            Log out
        </button>
    );
};

export default LogOutButton;