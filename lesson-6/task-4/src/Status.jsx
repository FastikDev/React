import React from "react";
import Online from './Online';
import Offline from './Offline';
import './status.jsx';

const Status = ({ isOnline }) => {
  if (isOnline) {
    return <Online />;
  } else {
    return <Offline />;
  }
};

export default Status;