import React, { useEffect, useState } from "react";
import Form from "../components/Form/Form";
import list from "../store/anyName.json";

const SubmitForm = () => {
  let [usersList, setObj] = useState(list.users);
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

    setObj((usersList = [...usersList, newUser]));
    console.log("obj", usersList);

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
  }, [usersList]);

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
