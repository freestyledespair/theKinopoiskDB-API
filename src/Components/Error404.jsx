import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <h1>Error 404, Page not found</h1>
            <h1><Link to={"/"}>You must go to the main page</Link></h1>
        </div>
    );
};

// данная компонента создана из-за ошибки в Гитхабе с роутерами

export default Error404;