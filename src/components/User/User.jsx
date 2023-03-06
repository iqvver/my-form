import React from "react";
import Divider from "../../UI/Divider/Divider";
import style from "./User.module.css";

const User = ({ user }) => {
  return (
    <>
      <div className={style.user}>
        <div className={style.name}>Имя:{user.name}</div>
        <div className={style.phone}>Телефон:{user.phone}</div>
        <div className={style.message}>Сообщение:{user.message}</div>
      </div>
      <Divider />
    </>
  );
};

export default User;
