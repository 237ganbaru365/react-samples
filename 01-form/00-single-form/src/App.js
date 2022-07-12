import React, { useState } from "react";

import "./App.css";

function App() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
    alert(`Hi, ${values.name}, registered successfully!`);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input type="text" name="name" onChange={changeHandler} />
      <label>Email</label>
      <input type="email" name="email" onChange={changeHandler} />
      <label>Password</label>
      <input type="password" name="password" onChange={changeHandler} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
