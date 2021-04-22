import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function EditUser() {
  let history = useHistory();
  const { id } = useParams();
  //    alert(id)
  const [user, setUser] = useState({
    name: "",
    useil: "",
    phrname: "",
    emaone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;
  const onchangeInput = (e) => {
    //  console.log(e.target.value)

    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  useEffect(async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
    // console.log('=================',result)
  }, []);

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={(e) => onsubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              required="required"
              name="name"
              value={name}
              onChange={(e) => onchangeInput(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              required="required"
              name="username"
              required="required"
              value={username}
              onChange={(e) => onchangeInput(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              required="required"
              value={email}
              onChange={(e) => onchangeInput(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              required="required"
              value={phone}
              onChange={(e) => onchangeInput(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              required="required"
              value={website}
              onChange={(e) => onchangeInput(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
