import React from 'react';
import Item from "./Item";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const List = ({posts, title, remove}) => {
    if (posts.length === 0) {
        return (
            <h1 style={{textAlign: "center"}}>Нет постов</h1>
        );
    }

    return (
        <div className='list'>
            <h1>{title}</h1>
            <TransitionGroup>
                {posts.map((post) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Item number={post.id} remove={remove} data={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default List;