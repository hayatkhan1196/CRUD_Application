import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUser] = useState([]);

  useEffect(async () => {
    const result = await axios.get("http://localhost:3003/users");
    // console.log(result, "==========================");
    setUser(result.data.reverse());
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    window.location.reload(false);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home page</h1>
        <table className="table boder shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>

                <td>
                  <Link
                    className="btn btn-primary mr-2"
                    to={`/user/${user.id}`}
                  >
                    View User
                  </Link>
                  <Link
                    className="btn btn-outline-secondary mr-2"
                    to={`/user/edit/${user.id}`}
                  >
                    Edit User
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete User
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Home;
