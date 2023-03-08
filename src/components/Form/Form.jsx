import React from "react";
import Button from "../../UI/buttons/Button";
import Input from "../../UI/inputs/Input";
import Textarea from "../../UI/textareas/Textarea";
import submit from "./Form.module.css";

const Form = (props) => {
  const { onSubmit, setPhone, setName, setMessage, phone, name } = props;
  return (
    <form onSubmit={(e) => onSubmit(e)} name="user" className={submit.form}>
      <div className={submit.input}>
        <Input
          required={"required"}
          name={"phone"}
          type={"tel"}
          getChange={(e) => setPhone(e.target.value)}
          placeholder={"Ваш телефон"}
          value={phone}
          mask="+7 (999) 999-99-99"
        />
        <Input
          required={"required"}
          name={"name"}
          type={"text"}
          getChange={(e) => setName(e.target.value)}
          placeholder={"Ваше имя"}
          value={name}
          mask={null}
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
