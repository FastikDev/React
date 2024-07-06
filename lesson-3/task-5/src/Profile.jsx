import React from "react";
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM YYYY');

const Profile = props => {
  const { userData } = props; 
  
  return (
    <div className="profile">
      <div className="profile__name">
        {userData.firstName} {userData.lastName}
      </div>
      <div className="profile__birth">
        Was born {formatDate(userData.birthDate)} {userData.birthPlace}
      </div>
    </div>
  );
};

export default Profile;
