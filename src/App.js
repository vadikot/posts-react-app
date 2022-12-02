import React, {useState} from "react";
import '../src/Styles/app.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AppRouter from "./UI/AppRouter";
import AuthContext from "./Context/AuthContext";


function App() {
    const USER_NAME = 'admin';
    const isLocalAuth = !!window.localStorage.getItem('isAuth');
    const [isAuth, setIsAuth] = useState(isLocalAuth);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            userName: USER_NAME,
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
