import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import JSONPretty from "react-json-pretty";
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt="error" />
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
        <p>{user.updated_at}</p>
        {/* {JSON.stringify(user,null,2)} */}

        {/* <JSONPretty data={user} /> */}
      </div>
    )
  );
};

export default Profile;
