import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { UserContext } from "../../App";

const Event = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/items?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <div>
      {item.map((itm) => (
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={itm.img} />
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
