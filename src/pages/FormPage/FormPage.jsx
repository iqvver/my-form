import { useState } from "react";
import style from "./FormPage.module.css";
import SubmitForm from "../../modules/SubmitForm/SubmitForm";
import Button from "../../UI/buttons/Button";
import Users from "../../modules/Users/Users";

const FormPage = () => {
  const [formVisible, showForm] = useState(false);
  const getShowForm = () => {
    showForm((formVisible) => !formVisible);
  };
  const [usersVisible, showUsers] = useState(false);
  const getShowUsers = () => {
    showUsers((usersVisible) => !usersVisible);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.form} onClick={() => showUsers(false)}>
        <div className={style.button}>
          <Button
            buttonClick={getShowForm}
            buttonName={
              formVisible ? (
                <span>Скрыть форму</span>
              ) : (
                <span>Показать форму</span>
              )
            }
          />
        </div>
        {formVisible ? <SubmitForm showUsers={showUsers} /> : null}
      </div>
      <div className={style.users}>
        <div className={style.button}>
          <Button
            buttonClick={getShowUsers}
            buttonName={
              usersVisible ? <span>Скрыть</span> : <span>Показать</span>
            }
          />
        </div>
        {usersVisible ? <Users /> : null}
      </div>
    </div>
  );
};

export default FormPage;
