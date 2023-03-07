import React, { useState } from "react";
import Form from "../../components/Form/Form";

const SubmitForm = ({ showUsers, showError, showSuccess }) => {
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
        {
          data.id ? submitSuccess() : showError(true);
        }
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
        setName={setName}
        setMessage={setMessage}
      />
    </>
  );
};

export default SubmitForm;
