import React from 'react';
import moment from 'moment';

const Greeting = ({ user }) => {
  const calculateAge = birthDateString => {
    const birthDate = moment(birthDateString, 'YYYY-MM-DD');
    const currentDate = moment();
    return currentDate.diff(birthDate, 'years');
  };

  const age = calculateAge(user.birthDate);

  return (
    <div className="greeting">
      My name is {user.firstName} {user.lastName}. I am {age} years old.
    </div>
  );
};

export default Greeting;

