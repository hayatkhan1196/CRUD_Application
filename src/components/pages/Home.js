import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [users, setUser] = useState([]);

  useEffect(async () => {
    const result = await axios.get("http://localhost:3003/users");
    console.log(result, "==========================");
    setUser(result.data);
  }, [users]);

  return (
    <div className="container">
      <div className="py-4">
        <h1>home page</h1>
      </div>
    </div>
  );
}
export default Home;
