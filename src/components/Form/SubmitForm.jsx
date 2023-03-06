import React, { useEffect, useState } from "react";
import submit from "./SubmitForm.module.css";
import object from "../../store/anyName.json";

const SubmitForm = () => {
  let [obj, setObj] = useState(object.users);
  let [phone, setPhone] = useState("");
  let [name, setName] = useState("");
  let [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let newUser = {
      //id: obj.length,
      phone,
      name,
      message,
    };

    setObj((obj = [...obj, newUser]));
    console.log("obj", obj);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("users", data);
      });
  }, [obj]);

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)} name="user" className={submit.form}>
        <div className={submit.input}>
          <input
            required
            name="phone"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ваш телефон"
          />
          <input
            required
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
          />
          <div className={submit.textarea}>
            <textarea
              name="message"
              id="text"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ваше сообщение"
            />
          </div>
        </div>
        <div className={submit.btn}>
          <button type="submit" className={submit.button}>
            Отправить
          </button>
        </div>
      </form>
    </>
  );
};

export default SubmitForm;
