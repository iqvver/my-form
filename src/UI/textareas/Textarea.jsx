import style from "./Textarea.module.css";

const Textarea = ({ name, getChange, placeholder }) => {
  return (
    <>
      <textarea
        className={style.textarea}
        name={name}
        onChange={getChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Textarea;
