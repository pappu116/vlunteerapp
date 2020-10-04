import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import Bar from "../ComnComponent/Bar/Bar";
import "./addevent.css";
const AddEvent = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const newItem = { ...loggedInUser, ...data };
    fetch("https://blooming-refuge-67435.herokuapp.com/adminAdded", {
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
    <>
      <Bar name="AddEvent" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formstyle">
          <div>
            <label htmlFor="title">Event Title</label>

            <input
              className="controls"
              name="title"
              defaultValue="Title"
              type="text"
              ref={register}
            />
            <label htmlFor="discription">Discription</label>
            <Form
              className="controls-text"
              as="textarea"
              defaultValue="Write Details you Product"
              name="discription"
              rows={3}
              ref={register}
            />
          </div>
          <div>
            <label htmlFor="date">Event Date</label>
            <input
              className="controls"
              name="date"
              type="date"
              ref={register}
            />

            <label htmlFor="banner" style={{ paddingTop: "20px" }}>
              Banner
            </label>
            <br />
            <input ref={register} type="file" name="banner" id="" />
          </div>
        </div>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </>
  );
};

export default AddEvent;
