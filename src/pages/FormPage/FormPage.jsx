import { useState } from "react";
import style from "./FormPage.module.css";
import SubmitForm from "../../modules/SubmitForm/SubmitForm";
import Button from "../../UI/buttons/Button";
import Users from "../../modules/Users/Users";
import Modal from "../../components/Modal/Modal";

const FormPage = () => {
  const [formVisible, showForm] = useState(false);
  const getShowForm = () => {
    showForm((formVisible) => !formVisible);
  };
  const [usersVisible, showUsers] = useState(false);
  const getShowUsers = () => {
    showUsers((usersVisible) => !usersVisible);
  };

  const [modalError, showError] = useState(false);
  const [modalSuccess, showSuccess] = useState(false);

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
        {formVisible ? (
          <SubmitForm showUsers={showUsers} showError={showError} showSuccess={showSuccess} />
        ) : null}
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
      {modalError ? (
        <Modal
          titleModal={"Ошибка."}
          textModal={"Что-то пошло не так!"}
          modalClose={showError}
        />
      ) : null}
      {modalSuccess ? (
        <Modal
          titleModal={"Успех."}
          textModal={"Ваше сообщение отправлено!"}
          modalClose={showSuccess}
        />
      ) : null}
    </div>
  );
};

export default FormPage;
