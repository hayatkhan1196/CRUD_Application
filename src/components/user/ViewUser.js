import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: "",
  });
  useEffect(async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    // console.log(result, "============================");
    setUser(result.data);
  }, []);

  return (
    <div className="container py-4 bg-light  mt-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      {/* <h1 className="display-4 ">UserId: {id}</h1> */}
      <hr />
      <ul className="list-group w-100 bg-dark ">
        <tr>
          <li className="list-group-item">Name: {user.name}</li>
          <li className="list-group-item">User name: {user.username}</li>
          <li className="list-group-item">Email: {user.email}</li>
          <li className="list-group-item">Phone: {user.phone}</li>
          <li className="list-group-item">Website: {user.website}</li>
        </tr>
      </ul>
    </div>
  );
};

export default ViewUser;
