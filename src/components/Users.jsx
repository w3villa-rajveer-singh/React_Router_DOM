import React from "react";
import { Link } from "react-router";

const Users = () => {
  const users = [
    { id: 1, name: "Rajveer" },
    { id: 2, name: "Richa" },
    { id: 3, name: "Rohan" },
    { id: 4, name: "Krishna" },
    { id: 5, name: "Raj" },
  ];

  return (
    <div>
      <h1>User Details</h1>
      <ul className="list">
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
