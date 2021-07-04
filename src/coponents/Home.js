import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users").then((res) => {
      res.json().then((result) => {
        setUsers(result.data);
      });
    });
  }, []);
//   console.log(users);
  return (
    <>
      <div>
        <h2>This is Home Route</h2>
        <p>
          You can see <Link to="/products">Products </Link> and{" "}
          <Link to="/feeds">Feeds </Link> Feeds page after login
        </p>
        <ol>
          <li>
            <p>Products and Feeds page are protected</p>
          </li>
        </ol>
      </div>

      <div className="data-box">
        <div className="row">
          {users.map((user) => (
            <div className="col-sm-4">
              <div className="border">
                <div className="avatar-box">
                  <img
                    className="avatar"
                    src={user.avatar}
                    alt={user.first_name}
                  />
                </div>
                <p className="text-center">
                  <b>
                    <span>
                      {user.first_name} {user.last_name}
                    </span>
                  </b>
                </p>
                <p className="text-center">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
