import React, { useEffect, useState } from 'react';

const User = ({ match }) => {
  const [userDate, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${match.params.userId}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error();
      })
      .then(userDate => {
        setUserData(userDate);
      });
  }, [match.params.userId]);

  if (!userData) {
    return null;
  }

  const { name, location, avatar_url } = userData;
  return (
    <div className="user">
      <img className="user__avatar" alt="User Avatar" src={avatar_url} />
      <div className="user__info">
        <div className="user__name">{name}</div>
        <div className="user__location">{location}</div>
      </div>
    </div>
  );
};

export default User;
