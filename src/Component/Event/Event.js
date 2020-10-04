import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { UserContext } from "../../App";
import NavBar from "../ComnComponent/Navbar/NavBar";

const Event = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(
      "https://blooming-refuge-67435.herokuapp.com/userSelf?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  //item deleted code start

  const deletedItem = (id) => {
    fetch(`https://blooming-refuge-67435.herokuapp.com/removed/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert(" If u Relly Cancel This Item click Ok");
        }
      });
    // console.log("deleted", id);
  };

  const cardStyle = {
    background: "#FFFFFF",
    display: "flex",
  };

  return (
    <>
      <NavBar />
      <div
        style={{
          background: "#F8FAFC",
          display: "flex",
          gridGap: "2rem",
          marginTop: "40px",
        }}
      >
        {item.map((itm) => (
          <Card style={{ width: "30rem" }}>
            <div style={cardStyle}>
              <Card.Img
                style={{ width: "170px" }}
                variant="top"
                src={itm.img}
              />
              <Card.Body>
                <Card.Title>{itm.volunteerName}</Card.Title>
                <Card.Text>{itm.date}</Card.Text>

                <Button variant="primary" onClick={() => deletedItem(itm._id)}>
                  Cancel
                </Button>
              </Card.Body>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Event;
