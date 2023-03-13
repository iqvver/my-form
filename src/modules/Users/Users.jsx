import React, { useEffect, useState } from "react";
import User from "../../components/User/User";
import { userAPI } from "../../api/Api";
import style from "./Users.module.css";

const Users = () => {
  let [usersList, setUsers] = useState();
  useEffect(() => {
    return async () => {
      let users = await userAPI.getUsers();
      setUsers(users);
    };
  }, []);

  const removeUser = (id) => {
    let newUsersList = usersList.filter((user) => user.id !== id);
    setUsers(newUsersList);
    userAPI.deleteUsers(id);
  };

  return (
    <>
      <div className={style.users}>
        {usersList ? (
          usersList.map((user) => (
            <User key={user.id} user={user} del={() => removeUser(user.id)} />
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </>
  );
};

export default Users;
