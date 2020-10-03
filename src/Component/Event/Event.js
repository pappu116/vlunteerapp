import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { UserContext } from "../../App";

const Event = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(
      "https://blooming-refuge-67435.herokuapp.com/items?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div>
      {item.map((itm) => (
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{itm.volunteerName}</Card.Title>
            <Card.Text>{itm.date}</Card.Text>
            <Button variant="primary">Cancel</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Event;
