import { useState } from "react";
import style from "./FormPage.module.css";
import SubmitForm from "../../modules/SubmitForm";
import Button from "../../UI/buttons/Button";

const FormPage = () => {
  const [form, showForm] = useState(false);
  const getShowForm = () => {
    showForm((form) => !form);
  };
  return (
    <>
      <div className={style.button}>
        <Button
          buttonClick={getShowForm}
          buttonName={
            form ? <span>Скрыть форму</span> : <span>Показать форму</span>
          }
        />
      </div>
      {form ? <SubmitForm /> : null}
    </>
  );
};

export default FormPage;
