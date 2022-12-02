import React from 'react';

const About = () => {
    return (
        <div className='about'>
            <h1>About</h1>
            <div className='about__body'>
                <p>
                    Hi, this is a Single-Page blog with using <a href='https://jsonplaceholder.typicode.com' target="_blank">jsonplaceholder
                    API</a>.<br/><br/>
                    Added all the necessary features for modern applications: sorting, searching, pagination,
                    routing. And simple authorization is also implemented, so you can log in as an admin and add or
                    delete posts. <b>Note:</b> App developed with React v18 and <a
                    href='https://jsonplaceholder.typicode.com' target="_blank">jsonplaceholder
                    API</a>.
                </p><br/>
                <div className='about__author'>
                    <p>App developed by <b>Vadim Kotsia</b>.</p>
                    <div className='about__links'>
                        <a href='https://github.com/vadikot' target="_blank">GitHub</a>
                        <a href='https://www.linkedin.com/in/vadim-kotsia-0b39aa180/' target="_blank">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;