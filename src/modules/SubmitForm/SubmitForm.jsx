import React, { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import "./inputError.css";

const SubmitForm = ({ showUsers, showError, showSuccess }) => {
  let [phone, setPhone] = useState("");
  let [phoneError, setPhoneError] = useState(false);
  let [name, setName] = useState("");
  let [nameError, setNameError] = useState(false);
  let [message, setMessage] = useState("");
  let [messageError, setMessageError] = useState(false);

  useEffect(() => {
    let newPhone = phone.replace(/[^0-9]/g, "");
    if (newPhone.length < 11) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  }, [phone]);
  useEffect(() => {
    if (!/^[0-9A-Za-zА-Яа-я\-_]+$/.test(name)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }, [name]);
  useEffect(() => {
    if (!/^[0-9A-Za-zА-Яа-я\-_]+$/.test(message)) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  }, [message]);

  const inputError = () => {
    const inputPhone = document.user.phone;
    const inputName = document.user.name;
    const inputMessage = document.user.message;
    if (phoneError) {
      inputPhone.classList.add("inputError");
      setTimeout(() => {
        inputPhone.classList.remove("inputError");
      }, 1000);
    }
    if (nameError) {
      inputName.classList.add("inputError");
      setTimeout(() => {
        inputName.classList.remove("inputError");
      }, 1000);
    }
    if (messageError) {
      inputMessage.classList.add("inputError");
      setTimeout(() => {
        inputMessage.classList.remove("inputError");
      }, 1000);
    }
  };

  const checkingForm = (newUser, submitSuccess) => {
    if (phoneError || nameError || messageError) {
      inputError();
    } else {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          data.id ? submitSuccess() : showError(true);
        })
        .catch((error) => {
          showError(true);
          console.log("error", error);
        });
    }
  };

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

    checkingForm(newUser, submitSuccess);
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        setPhone={setPhone}
        phone={phone}
        phoneError={phoneError}
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
