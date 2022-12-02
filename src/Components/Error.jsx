import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                Sorry, page not found.
            </h1>

            // go to login page or to posts
            <p style={{textAlign: "center", fontSize: '20px'}}>Go to <Link to='/about'>home page</Link>.</p>
        </div>
    );
};

export default Error;