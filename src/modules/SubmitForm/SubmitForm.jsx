import React, { useState } from "react";
import Form from "../../components/Form/Form";

const SubmitForm = ({showUsers}) => {
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
        showUsers(true);
      })
      .catch((error) => {
        console.log(error);
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
