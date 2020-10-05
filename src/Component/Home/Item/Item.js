import React, { useContext, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../../App";
import "./Item.css";
const Item = (props) => {
  const [category, setCategory] = useContext(CategoryContext);
  const { name, id, img } = props.pd;
  const generateRandomColor = () => {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
    //random color will be freshly served
  };
  return (
    <div className="display">
      <Link to="/register">
        <Card
          style={{
            width: "14rem",
            margin: "10px",
          }}
          onClick={() => setCategory(props.pd)}
        >
          <img className="image" src={img} alt="" />
          <h4
            className="overlay"
            style={{
              backgroundColor: generateRandomColor(),

              /*or if u want to random color inline function use it*/
              /*backgroundColor: `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,*/
            }}
          >
            {name}
          </h4>
        </Card>
      </Link>

      <br />
    </div>
  );
};

export default Item;
