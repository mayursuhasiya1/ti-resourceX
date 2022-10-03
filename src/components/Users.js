import { useState } from "react";
import axios from "../api/axios";

const Users = () => {
  const [users, setUsers] = useState();

  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {/* user and it */}
          {users.map((user, i) => (
            <li key={i}> {user?.username} </li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
    </article>
  );
};

export default Users;
