import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = ({children, extraClass, ...props}) => {
    return (
        <button {...props} className={[classes.myBtn, classes[extraClass]].join(' ')}>
            {children}
        </button>
    );
};

export default MyButton;