import React from "react";
import Button from "../../UI/buttons/Button";
import Input from "../../UI/inputs/Input";
import Textarea from "../../UI/textareas/Textarea";
import submit from "./Form.module.css";

const Form = ({ onSubmit, setPhone, setName, setMessage }) => {
  return (
    <form onSubmit={(e) => onSubmit(e)} name="user" className={submit.form}>
      <div className={submit.input}>
        <Input
          required={"required"}
          name={"phone"}
          type={"tel"}
          getChange={(e) => setPhone(e.target.value)}
          placeholder={"Ваш телефон"}
        />
        <Input
          required={"required"}
          name={"name"}
          type={"text"}
          getChange={(e) => setName(e.target.value)}
          placeholder={"Ваше имя"}
        />
        <div className={submit.textarea}>
          <Textarea
            name={"message"}
            getChange={(e) => setMessage(e.target.value)}
            placeholder={"Ваше сообщение"}
          />
        </div>
      </div>
      <div className={submit.button}>
        <Button buttonType="submit" buttonName={"Отправить"} />
      </div>
    </form>
  );
};

export default Form;
