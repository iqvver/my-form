import style from "./Input.module.css";

const Input = (props) => {
  const { required, name, type, getChange, placeholder } = props;
  return (
    <>
      <input
        className={style.input}
        required={required}
        name={name}
        type={type}
        onChange={getChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
