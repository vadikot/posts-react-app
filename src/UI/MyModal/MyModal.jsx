import React from "react";
import classes from "./MyModal.module.css";

const MyModal = ({children, isVisible, setIsVisible}) => {
    const rootClasses = [classes.myModal];

    if (isVisible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setIsVisible(false)}>
            <div className={classes.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;