import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { UserContext } from "../../App";

const Event = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/userSelf?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  //item deleted code start

  const deletedItem = (id) => {
    fetch(`http://localhost:5000/removed/${id}`, {
      method: "DELETE",
    });
    // .then((res) => res.json())
    // .then((result) => {
    //   if (result) {
    //     alert(" If u Relly Cancel This Item click Ok");
    //   }
    // });
    console.log("deleted", id);
  };

  return (
    <div>
      {item.map((itm) => (
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={itm.img} />
          <Card.Body>
            <Card.Title>{itm.volunteerName}</Card.Title>
            <Card.Text>{itm.date}</Card.Text>
            <Button variant="primary" onClick={() => deletedItem(itm.id)}>
              Cancel
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Event;
