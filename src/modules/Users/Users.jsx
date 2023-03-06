import React, { useEffect, useState } from "react";
import User from "../../components/User/User";
import style from "./Users.module.css";

const Users = () => {
  let [usersList, setUsers] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log("obj", usersList);

  return (
    <>
      <div className={style.users}>
        {usersList ? (
          usersList.map((user) => <User key={user.id} user={user} />)
        ) : (
          <div>Loading</div>
        )}
      </div>
    </>
  );
};

export default Users;
