import React from 'react';

const Comments = ({comments}) => {

    return (
        <div>
            <h4>Comments</h4>
            {
                comments.map(item =>
                    <div className='comment' key={item.id}>
                        <div className='comment__title'><b>{item.name}</b></div>
                        <div>{item.body}</div>
                        <div className='comment__author'>Written by: {item.email}</div>
                    </div>
                )}
        </div>
    );
};

export default Comments;