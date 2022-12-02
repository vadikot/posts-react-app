import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import MyModal from "../../UI/MyModal/MyModal";
import LoginForm from "../Forms/LoginForm";
import AuthContext from "../../Context/AuthContext";

const Navbar = () => {
    const {isAuth, setIsAuth, userName} = useContext(AuthContext);
    const [modalLogin, setModalLogin] = useState(false);

    function login() {
        window.localStorage.setItem('isAuth', 'true');
        setModalLogin(true);
    }

    function logout() {
        window.localStorage.removeItem('isAuth');
        setIsAuth(false);
    }

    return (
        <div className='navbar'>
            <MyModal isVisible={modalLogin} setIsVisible={setModalLogin}>
                <LoginForm setIsVisible={setModalLogin}/>
            </MyModal>
            <Link className='navbar__link' to={'/'}>Posts</Link>
            <Link className='navbar__link' to={'/about'}>About</Link>

            {
                isAuth
                    ? <div className='navbar__username'>| Hi, {userName}
                        <div className='navbar__link' onClick={logout}>(log out)</div>
                    </div>
                    : <div className='navbar__link' onClick={login}>Log in</div>
            }
        </div>
    );
};

export default Navbar;