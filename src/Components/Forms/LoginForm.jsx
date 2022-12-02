import React, {useContext} from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/Button/MyButton";
import AuthContext from "../../Context/AuthContext";

const LoginForm = ({setIsVisible}) => {
    const {setIsAuth} = useContext(AuthContext);

    return (
        <form className='login__form' autoComplete="on">
            <h1>Login</h1>
            <MyInput autoComplete="username" placeholder='LoginForm'/>
            <MyInput autoComplete="current-password" type='password' placeholder='Password'/>
            <p className='warning'>This project is a prototype, just click the login button.</p>
            <MyButton onClick={event => {
                event.preventDefault();
                setIsAuth(true);
                setIsVisible(false);
            }}>Log in</MyButton>
        </form>
    );
};

export default LoginForm;