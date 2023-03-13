import React from "react";
import Button from "../../UI/buttons/Button";
import Input from "../../UI/inputs/Input";
import Textarea from "../../UI/textareas/Textarea";
import submit from "./Form.module.css";

const Form = (props) => {
  const {
    onSubmit,
    setPhone,
    setName,
    setMessage,
    phone,
    name,
    nameError,
    messageError,
    phoneError,
  } = props;
  return (
    <form onSubmit={(e) => onSubmit(e)} name="user" className={submit.form}>
      <div className={submit.input}>
        <div className={submit.phone}>
          <Input
            id={"phone"}
            required={"required"}
            name={"phone"}
            type={"tel"}
            getChange={(e) => setPhone(e.target.value)}
            placeholder={"Ваш телефон"}
            value={phone}
            mask="+7 (999) 999-99-99"
          />
          {phoneError ? (
            <div className={submit.error}>Не правильно введен номер</div>
          ) : (
            <div className={submit.success}>Готово</div>
          )}
        </div>
        <div className={submit.name}>
          <Input
            required={"required"}
            name={"name"}
            type={"text"}
            getChange={(e) => setName(e.target.value)}
            placeholder={"Ваше имя"}
            value={name}
            mask={null}
          />
          {nameError ? (
            <div className={submit.error}>
              Присутствуют допустимые символы/поле пусто
            </div>
          ) : (
            <div className={submit.success}>Готово</div>
          )}
        </div>
      </div>

      <div className={submit.textarea}>
        <Textarea
          name={"message"}
          getChange={(e) => setMessage(e.target.value)}
          placeholder={"Ваше сообщение"}
        />
        {messageError ? (
          <div className={submit.error}>
            Присутствуют допустимые символы/поле пусто
          </div>
        ) : (
          <div className={submit.success}>Готово</div>
        )}
      </div>

      <div className={submit.button}>
        <Button buttonType="submit" buttonName={"Отправить"} />
      </div>
    </form>
  );
};

export default Form;
