import React from "react";
import style from "./Button.module.css";

const Button = ({
  buttonClick = null,
  buttonName = "Кнопка",
  buttonType = "button",
}) => {
  return (
    <>
      <button className={style.button} type={buttonType} onClick={buttonClick}>
        {buttonName}
      </button>
    </>
  );
};

export default Button;
