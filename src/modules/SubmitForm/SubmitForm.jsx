import React, { useEffect, useState } from "react";
import { userAPI } from "../../api/Api";
import Form from "../../components/Form/Form";
import { inputError } from "../../helpers/utilsError";
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

  const checkingForm = (newUser, submitSuccess) => {
    if (phoneError || nameError || messageError) {
      inputError(phoneError, nameError, messageError);
    } else {
      userAPI.sendUsers(newUser, submitSuccess, showError);
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
