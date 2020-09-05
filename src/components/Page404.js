import React from 'react';
import imag from '../404.gif';
import { Link } from 'react-router-dom';

let Page404 = () => (
    <div className="col-xs-1 text-center"> 
    <img src={imag} alt="404"/>
    </div>
);

export default Page404;