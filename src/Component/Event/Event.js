import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
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
    borderRadius: "5px",
  };

  return (
    <>
      <NavBar />

      <Container>
        <Row style={{ marginTop: "50px" }}>
          {item.map((itm) => (
            <Col md={6}>
              <div style={cardStyle}>
                <img
                  style={{ height: "200px", padding: "10px" }}
                  src={itm.img}
                  alt=""
                />
                <div style={{ padding: "10px" }}>
                  <h4>{itm.name}</h4>
                  <p>{itm.date}</p>
                  <Button
                    style={{
                      position: "absolute",
                      right: "10%",
                      bottom: "20%",
                    }}
                    variant="primary"
                    onClick={() => deletedItem(itm._id)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
              <br />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Event;
