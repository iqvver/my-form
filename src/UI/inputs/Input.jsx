import style from "./Input.module.css";
import React from "react";
import InputMask from "react-input-mask";

const Input = (props) => {
  const { required, name, getChange, placeholder, value, mask } = props;
  return (
    <>
      <InputMask
        name={name}
        value={value}
        onChange={getChange}
        mask={mask}
        placeholder={placeholder}
        required={required}
        className={style.input}
      />
    </>
  );
};

export default Input;
