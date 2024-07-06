import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

const userInfo = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '2006-08-06'
};

ReactDOM.render(
  <Greeting user={userInfo} />,
  rootElement
);
