import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = (props)=>{
    return (
        <div>
            <h3>Sorry. That didn't work.</h3> 
            <Link to='/'><h3>Head on home.</h3></Link>
            <h3>We'll look for our socket wrench.</h3>
        </div>
    );
}
export default ErrorPage;