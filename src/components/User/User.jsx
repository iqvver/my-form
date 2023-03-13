import React from "react";
import Divider from "../../UI/Divider/Divider";
import style from "./User.module.css";

const User = ({ user, del }) => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.del} onClick={del}>&times;</div>
        <div className={style.user}>
          <div className={style.name}>Имя:{user.name}</div>
          <div className={style.phone}>Телефон:{user.phone}</div>
          <div className={style.message}>Сообщение:{user.message}</div>
          <Divider />
        </div>
      </div>
    </>
  );
};

export default User;
