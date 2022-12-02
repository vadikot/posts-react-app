import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../Components/Error";
import PostById from "../pages/PostById";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path={"/"} element={<Posts/>}/>
            <Route exact path={"/post/:id"} element={<PostById/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/error"} element={<Error/>}/>
            <Route
                path="*"
                element={
                    <Navigate to={'/error'} replace/>
                }
            />
        </Routes>
    );
};

export default AppRouter;