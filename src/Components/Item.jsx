import React, {useContext} from "react";
import MyButton from "../UI/Button/MyButton";
import {useNavigate} from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const Item = (props) => {
    let navigate = useNavigate();
    const {isAuth} = useContext(AuthContext);

    return (
        <div className='item'>
            <div className='item__about'>
                <div className='title'>{props.number}. {props.data.title}</div>
                <div className='description'>{props.data.body}</div>
            </div>
            <div className='item__buttons buttons'>
                <MyButton onClick={() => navigate(`/post/${props.data.id}`)}>Open</MyButton>
                {
                    isAuth && <MyButton onClick={() => props.remove(props.data)}>Remove</MyButton>
                }
            </div>
        </div>
    );
}

export default Item;