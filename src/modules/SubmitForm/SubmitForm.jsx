import React, { useEffect, useState } from "react";
import Form from "../../components/Form/Form";

const SubmitForm = ({ showUsers, showError, showSuccess }) => {
  let [phone, setPhone] = useState("");
  let [name, setName] = useState("");
  let [nameError, setNameError] = useState(false);
  let [message, setMessage] = useState("");
  let [messageError, setMessageError] = useState(false);

  useEffect(() => {
    if (!/^[0-9A-Za-z\-_]+$/.test(name)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }, [name]);
  useEffect(() => {
    if (!/^[0-9A-Za-z\-_]+$/.test(message)) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  }, [message]);

  const onSubmit = async (e) => {
    e.preventDefault();
    let newUser = {
      //id: obj.length,
      phone: "+" + phone.replace(/[^0-9]/g, ""),
      name,
      message,
    };

    const submitSuccess = () => {
      showUsers(true);
      showSuccess(true);
      setTimeout(() => showSuccess(false), 3000);
    };

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
        data.id ? submitSuccess() : showError(true);
      })
      .catch((error) => {
        showError(true);
        console.log("error", error);
      });
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        setPhone={setPhone}
        phone={phone}
        setName={setName}
        name={name}
        nameError={nameError}
        setMessage={setMessage}
        messageError={messageError}
      />
    </>
  );
};

export default SubmitForm;
