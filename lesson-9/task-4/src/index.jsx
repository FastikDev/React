import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./UsersList";
import './index.scss';

const users = [
    {name: 'Tad', age: 18},
    {name: 'Anna', age: 45},
    {name: 'Jhon', age: 30},
    {name: 'Bob', age: 35}
];

const root = document.querySelector('#root');

ReactDOM.render(
    <React.StrictMode>
        <UsersList users={users} />
    </React.StrictMode>, 
    root
);
