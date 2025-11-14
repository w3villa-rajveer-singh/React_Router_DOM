import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

const UserProfile = () => {
  const {id} = useParams();

  return <div>
    <h1>You are on Profile of UserId : {id}</h1>
    <Link to="/users">Go back</Link>
    </div>;
};

export default UserProfile;
