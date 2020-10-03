import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { CategoryContext, UserContext } from "../../App";
import logo from "../../logos/Group 1329.png";
import "./register.css";

const Register = () => {
  const [loggedInUser] = useContext(UserContext);
  const [category] = useContext(CategoryContext);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const newItem = { ...loggedInUser, ...data };
    fetch("https://blooming-refuge-67435.herokuapp.com/addItem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="area">
      <img src={logo} style={{ height: "80px" }} alt="" />
      <div className="register-area">
        <h2>Register as a Volunteer</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="fullName"
            defaultValue={loggedInUser.name}
            ref={register}
            className="control"
          />
          <br />
          <input
            name="email"
            defaultValue={loggedInUser.email}
            ref={register}
            className="control"
          />
          <br />
          <input
            name="date"
            className="control"
            type="date"
            defaultValue="test"
            ref={register}
          />
          <br />
          <input
            name="Desicription"
            defaultValue="Desicription"
            ref={register}
            className="control"
          />
          <br />
          <input
            name="volunteerName"
            defaultValue={category.name}
            ref={register}
            className="control"
          />
          <br />
          <Button
            style={{ width: "60%", margin: "0 auto" }}
            type="submit"
            size="lg"
            block
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
