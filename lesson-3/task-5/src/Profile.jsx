import React from "react";
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM YY');

const Profile = props => {
  const { userData } = props;

  return (
    <div className="profile">
      <div className="profile__name">
        {`firstName=${userData.firstName} lastName=${userData.lastName}`}
      </div>
      <div className="profile__birth">
        {`Was born birthDate=${formatDate(userData.birthDate)} in birthPlace=${userData.birthPlace}`}
      </div>
    </div>
  );
};

export default Profile;

