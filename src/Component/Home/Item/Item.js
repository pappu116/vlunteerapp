import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../../App";
import "./Item.css";
const Item = (props) => {
  const [category, setCategory] = useContext(CategoryContext);
  const { name, id, img } = props.pd;
  return (
    <div className="display">
      <Link to="/register">
        <Card
          style={{
            width: "14rem",
            margin: "10px",
            background: "#421FCF",
            color: "#fff",
          }}
          onClick={() => setCategory(props.pd)}
        >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
      <br />
    </div>
  );
};

export default Item;
