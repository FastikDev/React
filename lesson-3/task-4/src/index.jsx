import React from "react";
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.scss';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

const userInfo = {
  firstName: 'Jhon',
  lastName: 'Doe',
  birthDate: '2006-9-17'
}

ReactDOM.render(
  <Greeting user={userInfo} />, rootElement 
);